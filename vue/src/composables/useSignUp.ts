import { ref } from "vue";
import type { Ref } from "vue";
import { projectAuth } from "@/config/firebase";

const error: Ref<unknown> = ref(null);
const isPending: Ref<boolean> = ref(false);

async function signUp(email: string, password: string, fullName: string){
    isPending.value = true;
    error.value = null;
    try { 
        const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        if(!response) {
            throw new Error("Couldn not create a new user");
        }
        await response.user?.updateProfile({displayName: fullName});
        
        return response;

    } catch (err) {
        console.log(err);
        if (err instanceof Error) {
        error.value = err.message;
        }
    } finally {
        isPending.value = false;

    }
}

export function useSignUp(){
    return { error, isPending, signUp };
}