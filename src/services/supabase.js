import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dtakqashtcltlpbeiwsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0YWtxYXNodGNsdGxwYmVpd3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDc2NTIsImV4cCI6MjA0NzY4MzY1Mn0.BJsZwXDJhf2dHMbWivx_9yPi500wqcE7poee6L5U1s4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
