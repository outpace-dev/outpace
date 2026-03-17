-- OUTPACE CONSULTATION TABLES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE consultations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  session_id UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
  slug TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'abandoned')),
  extracted_data JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  consultation_id UUID REFERENCES consultations(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  tool_calls JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE proposals (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  consultation_id UUID REFERENCES consultations(id) ON DELETE CASCADE,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT DEFAULT 'generated' CHECK (status IN ('generated', 'sent', 'viewed', 'accepted', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_consultations_session_id ON consultations(session_id);
CREATE INDEX idx_consultations_status ON consultations(status);
CREATE INDEX idx_messages_consultation_id ON messages(consultation_id);
CREATE INDEX idx_messages_created_at ON messages(created_at);
CREATE INDEX idx_proposals_consultation_id ON proposals(consultation_id);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert" ON consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON consultations FOR SELECT USING (true);
CREATE POLICY "Allow public update" ON consultations FOR UPDATE USING (true);
CREATE POLICY "Allow public insert" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON messages FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON proposals FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON proposals FOR SELECT USING (true);
CREATE POLICY "Allow public update" ON proposals FOR UPDATE USING (true);
