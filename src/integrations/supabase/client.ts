import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { hasSupabase } from '@/lib/hasSupabase';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// createClient throws synchronously on an empty URL/key, so it's only constructed when
// both env vars are present - callers must check hasSupabase first (src/lib/contact.ts does).
export const supabase: SupabaseClient | null = hasSupabase
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;
