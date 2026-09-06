// The contact form needs a configured Supabase project to actually send anything (see
// src/lib/contact.ts). Without it, the form must show a real error instead of doing
// nothing at all - which is what it did before (no onSubmit handler existed).
export const hasSupabase = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);
