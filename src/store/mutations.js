export default {
  addUser(state, info) {
    state.user = info.user;
    state.token = info.credential.accessToken;
    console.log(state);
  },
};
