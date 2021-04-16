import firebase from "firebase/app";
import "firebase/auth";

export default function authChange() {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken(true);
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  });
}
