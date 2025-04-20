import { createClient } from 'npm:@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}

const SHOPEE_API_URL = 'https://shopee.co.id/api/v4';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.pathname.split('/').pop()

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

    // Verify authentication
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('Missing authorization header')
    }

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (authError || !user) {
      throw new Error('Unauthorized')
    }

    // Common headers for Shopee API
    const shopeeHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'Accept': 'application/json',
      'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      'X-Requested-With': 'XMLHttpRequest',
      'X-API-SOURCE': 'pc',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120"',
      'sec-ch-ua-platform': '"Windows"',
      'Referer': 'https://shopee.co.id/',
      'Origin': 'https://shopee.co.id'
    };

    // Handle different endpoints
    switch (path) {
      case 'search': {
        const searchParams = new URLSearchParams(url.search)
        const keyword = searchParams.get('keyword')
        if (!keyword) {
          throw new Error('Missing keyword parameter')
        }

        const searchUrl = new URL(`${SHOPEE_API_URL}/search/search_items`);
        searchUrl.searchParams.set('by', 'relevancy');
        searchUrl.searchParams.set('keyword', keyword);
        searchUrl.searchParams.set('limit', '60');
        searchUrl.searchParams.set('newest', '0');
        searchUrl.searchParams.set('order', 'desc');
        searchUrl.searchParams.set('page_type', 'search');
        searchUrl.searchParams.set('scenario', 'PAGE_GLOBAL_SEARCH');
        searchUrl.searchParams.set('version', '2');

        const response = await fetch(searchUrl.toString(), { 
          headers: shopeeHeaders,
          method: 'GET'
        });
        
        if (!response.ok) {
          throw new Error(`Shopee API error: ${response.status}`);
        }

        const rawData = await response.json();
        
        // Check if we have the expected data structure
        if (!rawData?.data?.items) {
          console.error('Unexpected API response:', rawData);
          throw new Error('Invalid API response structure');
        }

        // Transform the items to match our expected format
        const items = rawData.data.items.map(item => ({
          itemid: item.item_basic.itemid,
          shopid: item.item_basic.shopid,
          name: item.item_basic.name,
          price: item.item_basic.price,
          price_min: item.item_basic.price_min,
          price_max: item.item_basic.price_max,
          stock: item.item_basic.stock,
          historical_sold: item.item_basic.historical_sold,
          rating_star: item.item_basic.item_rating.rating_star,
          image: `https://down-id.img.susercontent.com/${item.item_basic.image}_tn`
        }));

        const data = {
          data: {
            items,
            total_count: rawData.data.total_count || items.length
          }
        };

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case 'product': {
        const itemId = url.searchParams.get('itemId')
        const shopId = url.searchParams.get('shopId')
        
        if (!itemId || !shopId) {
          throw new Error('Missing itemId or shopId parameter')
        }

        const productUrl = new URL(`${SHOPEE_API_URL}/item/get`);
        productUrl.searchParams.set('itemid', itemId);
        productUrl.searchParams.set('shopid', shopId);

        const response = await fetch(productUrl.toString(), { 
          headers: shopeeHeaders,
          method: 'GET'
        });
        
        if (!response.ok) {
          throw new Error(`Shopee API error: ${response.status}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      default:
        throw new Error('Invalid endpoint')
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})