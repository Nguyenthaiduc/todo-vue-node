import { ref } from "vue";
import type { Ref } from "vue";
import { projectAuth } from "@/config/firebase";

const error: Ref<unknown> = ref(null);

async function logOut() {
  error.value = null;
  try {
    const response = await projectAuth.signOut();

    return response;
  } catch (err) {
    console.log(err);
    if (err instanceof Error) {
      error.value = err.message;
    }
  }
}

export function useLogout() {
  return { error, logOut };
}
