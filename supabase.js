const SUPABASE_URL = "https://lxtuzbhlzlcxiincfcil.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4dHV6YmhsemxjeGlpbmNmY2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMDMzOTMsImV4cCI6MjA4Mzc3OTM5M30.yo_98AYwWSbfK8TAidZm2ff93UGVUo6gt-i88qDnjdE";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
