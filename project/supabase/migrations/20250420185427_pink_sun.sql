/*
  # Create initial schema for Shopee Research Tool

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `item_id` (bigint)
      - `shop_id` (bigint) 
      - `name` (text)
      - `price` (numeric)
      - `historical_prices` (jsonb)
      - `rating` (numeric)
      - `sold` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `searches`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `keyword` (text)
      - `results_count` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  item_id bigint NOT NULL,
  shop_id bigint NOT NULL,
  name text NOT NULL,
  price numeric NOT NULL,
  historical_prices jsonb DEFAULT '[]'::jsonb,
  rating numeric,
  sold integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, item_id, shop_id)
);

-- Create searches table
CREATE TABLE IF NOT EXISTS searches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  keyword text NOT NULL,
  results_count integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE searches ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their own products"
  ON products
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own searches"
  ON searches
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);