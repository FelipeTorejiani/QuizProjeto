/*
  # Create Quiz Rankings Table

  1. New Tables
    - `quiz_rankings`
      - `id` (uuid, primary key) - Unique identifier for each ranking entry
      - `player_name` (text) - Name of the player
      - `score` (integer) - Final score achieved
      - `total_questions` (integer) - Total number of questions answered
      - `level` (text) - Level achieved (Iniciante, Analista Jr, Analista Pleno, Analista Senior, Especialista)
      - `time_taken` (integer) - Total time taken in seconds
      - `created_at` (timestamptz) - Timestamp of when the score was recorded

  2. Security
    - Enable RLS on `quiz_rankings` table
    - Add policy for anyone to read rankings (public leaderboard)
    - Add policy for anyone to insert their own score
*/

CREATE TABLE IF NOT EXISTS quiz_rankings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_name text NOT NULL,
  score integer NOT NULL DEFAULT 0,
  total_questions integer NOT NULL DEFAULT 0,
  level text NOT NULL DEFAULT 'Iniciante',
  time_taken integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_rankings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view rankings"
  ON quiz_rankings
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert rankings"
  ON quiz_rankings
  FOR INSERT
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_quiz_rankings_score ON quiz_rankings(score DESC, time_taken ASC);