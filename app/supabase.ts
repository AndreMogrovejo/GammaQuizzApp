import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bjvjgrxjuwvohsujlnbb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdmpncnhqdXd2b2hzdWpsbmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI5OTQ5NDMsImV4cCI6MjAwODU3MDk0M30.OJSjoSwcLWOEbfzg_5eHksru-w-a28BvWIRc5dGFxog";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

// Anti_Miguel123.
