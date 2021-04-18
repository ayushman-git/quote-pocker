export default {
  addUser(state, user) {
    state.user = user;
  },
  addToken(state, token) {
    state.token = token;
  },
  deleteUser(state) {
    state.user = {};
  },
  addQuote(state, quote) {
    state.quote = quote;
  },
  addQuotes(state, quotes) {
    state.userQuotes = quotes;
  },
  changeFetchQuoteStatus(state) {
    state.fetchingQuote = !state.fetchingQuote;
  },
};
