// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dogtwsomhufkybobbocx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZ3R3c29taHVma3lib2Jib2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzA1MTgsImV4cCI6MjA2MzUwNjUxOH0.sd5wuUTuaWVbibC2Z3QW6z65bPfVPtvg8mrpS7U8Kx8'

export const supabase = createClient(supabaseUrl, supabaseKey)
