import firebase from "firebase/app";
import "firebase/auth";
import router from "@/router";
import { auth, db } from "@/auth/firebase";
import checkDuplication from "@/helpers/checkDuplication";

export default {
  async getUser({ commit, state }) {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      const data = await firebase.auth().signInWithPopup(provider);
      commit("addUser", data);
      router.push({
        name: "Quotes",
        params: {
          username: state.user?.displayName.split(" ")[0].toLowerCase(),
        },
      });
    } catch (error) {
      console.error(error);
    }
  },

  async signOut({ commit }) {
    try {
      commit("deleteUser");
      await auth.signOut();
      router.push({
        name: "Home",
      });
    } catch (err) {
      console.error(err);
    }
  },

  async fetchQuote({ commit }) {
    try {
      commit("changeFetchQuoteStatus");
      const res = await fetch("https://api.quotable.io/random");
      const quote = await res.json();
      commit("addQuote", quote);
      commit("changeFetchQuoteStatus");
    } catch (err) {
      console.error(err);
    }
  },

  async addQuoteToFirebase({ dispatch }, quote) {
    dispatch("fetchQuote");
    if (await checkDuplication(quote["_id"])) return;
    await db.collection("quotes").add(quote, { merge: true });
  },
};
