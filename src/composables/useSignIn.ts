import { ref } from "vue";
import type { Ref } from "vue";
import { projectAuth } from "@/config/firebase";

const error: Ref<unknown> = ref(null);
const isPending: Ref<boolean> = ref(false);

async function signIn(email: string, password: string){
    isPending.value = true;
    error.value = null;
    try { 
       const response = await projectAuth.signInWithEmailAndPassword(email, password);
       
       return response;
    } catch (err) {
        console.log(err);
        if(err instanceof Error){
            error.value = err.message;
        }
    } finally {
        isPending.value = false;
    }
}

export function useSignIn(){
    return { error, isPending, signIn };
}