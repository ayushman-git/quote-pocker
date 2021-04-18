<template>
  <div
    @click="cliclHandler"
    class="text-sm bg-green-500 w-max p-2 px-3 rounded-md text-gray-700 font-medium select-none"
  >
    {{ tag }}
  </div>
</template>

<script>
export default {
  name: "QuoteTag",
  props: {
    tag: {
      type: String,
    },
  },
  methods: {
    cliclHandler() {
      this.$emit("tagClicked", this.tag);
    },
  },
};
</script>