import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from 'expo-secure-store'
import * as aesjs from 'aes-js'
import 'react-native-get-random-values'

class LargeSecureStore {
  private async _encrypt(key: string, value: string) {
    const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8))

    const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1))
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(values))

    await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encrypte))
  }
}

const supabaseUrl = "https://jrhqokyttftsqfnponit.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyaHFva3l0dGZ0c3FmbnBvbml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1NTA5NTUsImV4cCI6MjAyNjEyNjk1NX0.4Nb-xrdyAHJXUTP3ofcTRFR3WKL5_Cg0gEK5GLhTvXI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
})
