<template>
  <div class="bg-gray-600 p-4 flex justify-between items-center gap-2">
    <div>
      {{ quote.content }}
    </div>
    <div v-if="!showConfirm" class="cursor-pointer" @click="initialClick">
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
    <div v-else @click="deleteHandler">
      <button
        class="rounded-md px-2 py-1 bg-red-500 text-white font-bold"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuoteView",
  props: {
    quote: {
      type: Object,
    },
  },
  data() {
    return {
      showConfirm: false,
      interval: null,
    };
  },
  methods: {
    initialClick() {
      this.showConfirm = true;
      this.interval = setTimeout(() => {
        this.showConfirm = false;
      }, 3000);
    },
    deleteHandler() {
      this.$emit("deleteQuote", this.quote["_id"]);
    },
  },
};
</script>
