import firebaseConfig from "../firebase";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
firebaseConfig;
const provider = new GoogleAuthProvider();
const providerTwitter = new TwitterAuthProvider();
const providerGithub = new GithubAuthProvider();
const auth = getAuth();
export function handleSignInGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user.displayName);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function handleSignInTwitter() {
  signInWithPopup(auth, providerTwitter)
    .then((result) => {
      console.log(result.user.displayName);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function handleSignInGitHub() {
  signInWithPopup(auth, providerGithub)
    .then((result) => {
      console.log(result.user.displayName);
    })
    .catch((error) => {
      console.log(error);
    });
}
export function handleSignOut() {
  signOut(auth)
    .then(() => {
      console.log("out");
    })
    .catch((error) => {
      console.log(error);
    });
}
