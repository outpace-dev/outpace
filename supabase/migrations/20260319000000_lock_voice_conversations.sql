-- Lock down voice_conversations: service_role only (no anon access)
-- This prevents anyone with just the anon key from reading transcripts.
-- The webhook now uses createAdminClient() with the service_role key.

-- Drop the old open policies
DROP POLICY IF EXISTS "Allow insert from service" ON voice_conversations;
DROP POLICY IF EXISTS "Allow select from service" ON voice_conversations;

-- Create service_role-only policies
CREATE POLICY "Service role insert" ON voice_conversations
  FOR INSERT TO service_role WITH CHECK (true);

CREATE POLICY "Service role select" ON voice_conversations
  FOR SELECT TO service_role USING (true);
