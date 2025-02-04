import { supabase } from "@/lib/supabase";

export function signOut() {
    supabase.auth.signOut({ scope: 'local'}).then((error) => {
        if(error.error != null) {
            console.log('Error logging user out: ' + error.error)
        }
    }).catch((error) => {
        console.log('Error logging user out: ' + error)
            return false
    })
}
  