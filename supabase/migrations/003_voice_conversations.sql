-- Voice conversation transcripts from ElevenLabs post-call webhook
CREATE TABLE IF NOT EXISTS voice_conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  elevenlabs_conversation_id TEXT UNIQUE NOT NULL,
  agent_id TEXT,
  status TEXT,
  transcript JSONB DEFAULT '[]',
  transcript_summary TEXT,
  call_successful TEXT,
  call_duration_secs NUMERIC,
  cost NUMERIC,
  raw_event JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS: allow inserts and selects from anon key (webhook runs server-side)
ALTER TABLE voice_conversations ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow insert from service' AND tablename = 'voice_conversations') THEN
    CREATE POLICY "Allow insert from service" ON voice_conversations FOR INSERT TO anon WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow select from service' AND tablename = 'voice_conversations') THEN
    CREATE POLICY "Allow select from service" ON voice_conversations FOR SELECT TO anon USING (true);
  END IF;
END $$;
