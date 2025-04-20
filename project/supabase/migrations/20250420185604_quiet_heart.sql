/*
  # Fix searches table RLS policies

  1. Changes
    - Update RLS policy for searches table to allow inserts
    - Add policy to ensure user_id is set correctly on insert

  2. Security
    - Ensures users can only insert their own searches
    - Maintains existing read policy
*/

-- Drop existing policy
DROP POLICY IF EXISTS "Users can manage their own searches" ON searches;

-- Create separate policies for different operations
CREATE POLICY "Users can read their own searches"
  ON searches
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own searches"
  ON searches
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);