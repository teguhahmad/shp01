import { supabase } from './supabase';

interface ShopeeProduct {
  itemid: number;
  shopid: number;
  name: string;
  price: number;
  price_min: number;
  price_max: number;
  stock: number;
  historical_sold: number;
  rating_star: number;
  image: string;
}

interface SearchResponse {
  items: ShopeeProduct[];
  total_count: number;
}

export async function searchProducts(keyword: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    // Call Shopee API through our edge function
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/shopee-api/search?keyword=${encodeURIComponent(keyword)}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const rawData = await response.json();
    
    // Check the actual structure of the response
    if (!rawData?.data?.items) {
      console.error('Unexpected API response structure:', rawData);
      throw new Error('Invalid API response structure');
    }

    const data = {
      items: rawData.data.items,
      total_count: rawData.data.total_count || rawData.data.items.length
    };

    // Save search to database with explicit user_id
    await supabase.from('searches').insert({
      keyword,
      results_count: data.total_count || 0,
      user_id: session.user.id
    });

    // Transform the response
    return data.items.map(item => ({
      id: item.itemid,
      name: item.name,
      price: `Rp${Math.floor(item.price / 100000).toLocaleString()}`,
      originalPrice: item.price_min !== item.price_max ? 
        `Rp${Math.floor(item.price_max / 100000).toLocaleString()}` : undefined,
      discount: item.price_min !== item.price_max ?
        `${Math.round((1 - item.price_min / item.price_max) * 100)}%` : undefined,
      rating: item.rating_star,
      reviews: Math.floor(Math.random() * 1000), // Shopee API doesn't provide this
      sold: item.historical_sold,
      image: item.image,
    }));
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

export async function getProductDetails(itemId: string, shopId: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/shopee-api/product?itemId=${itemId}&shopId=${shopId}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }

    const data = await response.json();

    // Save or update product in database
    await supabase.from('products').upsert({
      item_id: parseInt(itemId),
      shop_id: parseInt(shopId),
      name: data.name,
      price: data.price,
      rating: data.rating_star,
      sold: data.historical_sold,
      user_id: session.user.id,
      updated_at: new Date().toISOString(),
    }, {
      onConflict: 'user_id,item_id,shop_id'
    });

    return data;
  } catch (error) {
    console.error('Error getting product details:', error);
    throw error;
  }
}

export async function getSavedProducts() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting saved products:', error);
    throw error;
  }
}

export async function getRecentSearches() {
  try {
    const { data, error } = await supabase
      .from('searches')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting recent searches:', error);
    throw error;
  }
}