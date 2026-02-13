/* ============================================================
   CONFIGURAZIONE SUPABASE (Browser + Capacitor)
   ============================================================ */

// URL del tuo progetto Supabase
const SUPABASE_URL = "https://fqrfggrcbfkjwvahhwpf.supabase.co";

// Chiave pubblica anon (NON è segreta, può stare nel frontend)
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxcmZnZ3JjYmZrand2YWhod3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NzQ3MDYsImV4cCI6MjA4NjA1MDcwNn0.uorEhzjEMkw_s2J1P_yP3iPIwQq0h7zH8BqJ0tyPuz8";

// Inizializza il client Supabase usando un nome NON in conflitto
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/*
   Debug opzionale
*/
console.log("Supabase inizializzato:", SUPABASE_URL);
