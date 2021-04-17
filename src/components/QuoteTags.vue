<template>
  <aside class="m-2 my-8 flex justify-center">
    <QuoteTag v-for="(tag, index) in tags" :key="index" :tag="tag" />
  </aside>
</template>

<script>
import QuoteTag from "@/components/QuoteTag";

export default {
  name: "QuoteTags",
  components: { QuoteTag },
  props: {
    tags: {
      type: Array,
    },
  },
  mounted() {
    console.log(this.tags);
  },
};
</script>

<style>
</style>