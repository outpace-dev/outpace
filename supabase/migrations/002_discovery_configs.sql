-- Discovery page configs — stores sensitive prompt data server-side
-- so it doesn't live in the source code.

CREATE TABLE discovery_configs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  first_message TEXT,
  custom_question_framework TEXT,
  system_prompt_additions TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Only service-role can read/write these — never exposed to the browser
ALTER TABLE discovery_configs ENABLE ROW LEVEL SECURITY;

-- No public policies — only accessible via service-role key (admin client)
-- This ensures anon key (browser) cannot read the prompts

CREATE INDEX idx_discovery_configs_slug ON discovery_configs(slug);
