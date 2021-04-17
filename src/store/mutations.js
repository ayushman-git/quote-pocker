export default {
  addUser(state, info) {
    state.user = info.user;
    state.token = info.credential.accessToken;
  },
  deleteUser(state) {
    state.user = {};
  },
  addQuote(state, quote) {
    state.quote = quote;
  },
  changeFetchQuoteStatus(state) {
    state.fetchingQuote = !state.fetchingQuote;
  },
};
