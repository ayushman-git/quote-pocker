<template>
  <section
    class="max-w-5xl mx-auto p-3 px-4 grid place-items-center min-h-screen"
  >
    <div>
      <header></header>
      <QuotesGen />
    </div>
  </section>
</template>

<script>
import QuotesGen from "@/components/QuotesGen.vue";

export default {
  name: "Quotes",
  components: { QuotesGen },
};
</script>
