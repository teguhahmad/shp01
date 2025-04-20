import { createClient } from 'npm:@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const path = url.pathname.split('/')[1]

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

    // Handle different endpoints
    switch (path) {
      case 'search':
        const searchParams = new URLSearchParams(url.search)
        const keyword = searchParams.get('keyword')
        if (!keyword) {
          throw new Error('Missing keyword parameter')
        }

        // Call Shopee API
        const searchResponse = await fetch(
          `https://shopee.co.id/api/v4/search/search_items?keyword=${encodeURIComponent(keyword)}&limit=20`,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0',
              'Accept': 'application/json',
            }
          }
        )

        const searchData = await searchResponse.json()
        return new Response(JSON.stringify(searchData), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })

      case 'product':
        const itemId = url.searchParams.get('itemId')
        const shopId = url.searchParams.get('shopId')
        
        if (!itemId || !shopId) {
          throw new Error('Missing itemId or shopId parameter')
        }

        const productResponse = await fetch(
          `https://shopee.co.id/api/v4/item/get?itemid=${itemId}&shopid=${shopId}`,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0',
              'Accept': 'application/json',
            }
          }
        )

        const productData = await productResponse.json()
        return new Response(JSON.stringify(productData), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })

      default:
        throw new Error('Invalid endpoint')
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})