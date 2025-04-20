import { supabase } from './supabase';

export async function searchProducts(keyword: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

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

    return await response.json();
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

    return await response.json();
  } catch (error) {
    console.error('Error getting product details:', error);
    throw error;
  }
}

export async function getShopDetails(shopId: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/shopee-api/shop?shopId=${shopId}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch shop details');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting shop details:', error);
    throw error;
  }
}

export async function getTrends(category: string) {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/shopee-api/trends?category=${encodeURIComponent(category)}`,
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch trends');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting trends:', error);
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

export async function getSavedCompetitors() {
  try {
    const { data, error } = await supabase
      .from('competitors')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting saved competitors:', error);
    throw error;
  }
}

export async function getSavedKeywords() {
  try {
    const { data, error } = await supabase
      .from('keywords')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting saved keywords:', error);
    throw error;
  }
}

export async function getSavedTrends() {
  try {
    const { data, error } = await supabase
      .from('trends')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting saved trends:', error);
    throw error;
  }
}