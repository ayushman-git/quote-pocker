<template>
  <section class="min-h-screen max-w-5xl mx-auto">
    <div class="h-1/2 flex flex-col pt-36 lg:flex-row">
      <aside class="lg:pr-10 lg:col-span-1 row-span-1 p-4 h-min lg:w-1/3">
        <header>
          <h1 class="text-2xl border-b border-gray-400 text-center pb-2">
            Genres
          </h1>
        </header>
        <section class="flex flex-row gap-5 mt-6 flex-wrap">
          <QuoteTag
            v-for="(quote, index) in quotesGenres"
            :key="index"
            :tag="quote"
            :selectedTag="selectedTag"
            @tagClicked="clickHandler"
          />
        </section>
      </aside>

      <section
        v-if="selectedTag"
        class="lg:border-l border-gray-400 lg:pl-10 flex flex-col gap-2 p-4 lg:w-2/3 divide-solid divide-y divide-gray-600 divide-opacity-25"
      >
        <QuoteView
          v-for="quote in selectedQuotes"
          :key="quote['_id']"
          :quote="quote"
          @deleteQuote="deleteQuoteHandler"
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
      selectedTag: "",
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
    deleteQuoteHandler(tag) {
      this.deleteQuote(tag);
      this.selectedQuotes = [];
      this.selectedTag = "";
    },
    clickHandler(tag) {
      this.selectedTag = tag;
      this.selectedQuotes = this.getQuoteByGenres(tag);
    },
    ...mapActions(["getUserQuotes", "deleteQuote"]),
  },
};
</script>
