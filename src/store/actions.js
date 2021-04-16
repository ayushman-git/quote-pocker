import firebase from "firebase/app";
import "firebase/auth";

export default {
  async getUser({ commit }) {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      const data = await firebase.auth().signInWithPopup(provider);
      commit("addUser", data);
    } catch (error) {
      console.error(error);
    }
  },
};
