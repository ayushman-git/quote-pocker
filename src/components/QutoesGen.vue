<template>
  <div v-if="quoteInfo">
    <QuoteTags :tags="quoteInfo.tags" />
    <blockquote class="fontChange text-xl text-center text-gray-200 mx-10">
      "{{ quoteInfo.content }}"
    </blockquote>
    <p class="text-center mt-3">-{{ quoteInfo.author }}</p>
  </div>
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
    ...mapGetters(["quoteInfo"]),
  },
  methods: {
    ...mapActions(["fetchQuote"]),
  },
};
</script>

<style scoped>
.fontChange {
  font-family: "Poppins", sans-serif;
}
</style>