<template>
  {{ quote.content }}
</template>

<script>
export default {
  name: "QuoteView",
  props: {
    quote: {
      type: Object,
    },
  },
};
</script>

<style>
</style>