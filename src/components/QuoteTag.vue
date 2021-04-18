<template>
  <div @click="cliclHandler" :class="classHandler">
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
    selectedTag: {
      type: String,
    },
  },
  computed: {
    classHandler() {
      console.log();
      if (this.selectedTag === this.tag) return "tag-active";
      return "tag";
    },
  },
  methods: {
    cliclHandler() {
      this.$emit("tagClicked", this.tag);
    },
  },
};
</script>