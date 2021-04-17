<template>
  <div v-if="!quoteStatus" class="-mt-8">
    <QuoteTags :tags="quoteInfo.tags" />
    <blockquote class="fontChange text-xl text-center text-gray-200 mx-10">
      "{{ quoteInfo.content }}"
    </blockquote>
    <p class="text-center mt-3">-{{ quoteInfo.author }}</p>
    <div class="flex justify-center gap-8 mt-8">
      <button class="rounded-btn" @click="addQuoteToFirebase(quoteInfo)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg></button
      ><button class="rounded-btn" @click="fetchQuote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import QuoteTags from "@/components/QuoteTags";

export default {
  name: "QuotesGen",
  components: { QuoteTags },
  mounted() {
    this.fetchQuote();
  },
  computed: {
    ...mapGetters(["quoteInfo", "quoteStatus"]),
  },
  methods: {
    ...mapActions(["fetchQuote", "addQuoteToFirebase"]),
  },
};
</script>

<style scoped>
.fontChange {
  font-family: "Poppins", sans-serif;
}
</style>