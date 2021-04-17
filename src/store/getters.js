export default {
  userInfo(state) {
    return state.user;
  },
  quoteInfo(state) {
    return state.quote;
  },
  quoteStatus(state) {
    return state.fetchingQuote;
  },
};
