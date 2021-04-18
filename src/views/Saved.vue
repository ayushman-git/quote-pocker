<template>
  <section class="min-h-screen grid place-items-center">
    <div class="grid grid-flow-row grid-cols-2">
      <aside class="pr-10">
        <header>
          <h1 class="text-2xl border-b-2 border-gray-400 text-center pb-2">
            Genres
          </h1>
        </header>
        <section class="flex flex-col gap-5 mt-6">
          <QuoteTag
            v-for="(quote, index) in quotesGenres"
            :key="index"
            :tag="quote"
            @tagClicked="clickHandler"
          />
        </section>
      </aside>
      <section class="border-l-2 border-gray-400 pl-10">
        <QuoteView
          v-for="quote in selectedQuotes"
          :key="quote['_id']"
          :quote="quote"
        />
      </section>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QuoteTag from "@/components/QuoteTag";
import QuoteView from "@/components/QuoteView";

export default {
  name: "Saved",
  data() {
    return {
      selectedQuotes: [],
    };
  },
  components: { QuoteTag, QuoteView },
  mounted() {
    this.getUserQuotes();
  },
  computed: {
    ...mapGetters(["quotesGenres", "getQuoteByGenres"]),
  },
  methods: {
    clickHandler(tag) {
      this.selectedQuotes = this.getQuoteByGenres(tag);
    },
    ...mapActions(["getUserQuotes"]),
  },
};
</script>

<style>
</style>