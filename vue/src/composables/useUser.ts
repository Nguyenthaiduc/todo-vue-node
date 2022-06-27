import { ref } from "vue";
import type { Ref } from "vue";
import { projectAuth } from "@/config/firebase";
import type firebase from "firebase/app";
// import { User } from '@firebase/auth-types';

type User = firebase.User;

const user: Ref<User | null > = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(function (_user) {
  if (_user) user.value = _user;
});

function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
