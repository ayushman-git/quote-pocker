export default {
  userInfo(state) {
    return state.user;
  },
  quoteInfo(state) {
    return state.quote;
  },
  userQuotesInfo(state) {
    return state.userQuotes;
  },
  quoteStatus(state) {
    return state.fetchingQuote;
  },
  quotesGenres(state) {
    const quotesArr = state.userQuotes.map((quote) => quote.tags).flat(2);
    const finalArr = new Set(quotesArr);
    return finalArr;
  },
  getQuoteByGenres: (state) => (selectedTag) => {
    const filteredQuotes = state.userQuotes.filter((quote) =>
      quote.tags.includes(selectedTag)
    );
    return filteredQuotes;
  },
};
