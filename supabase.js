<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
  const { createClient } = supabase;
  const supabaseUrl = "https://xyzcompany.supabase.co"; // твой url
  const supabaseKey = "public-anon-key"; // твой public key
  const supabaseClient = createClient(supabaseUrl, supabaseKey);
</script>
