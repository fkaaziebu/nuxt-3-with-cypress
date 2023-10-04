<script>
export default {
  data() {
    return { username: "", password: "", isSubmitted: true };
  },

  methods: {
    increment() {
      this.count++;
    },
    clear() {
      this.name = "";
    },
    update() {
      this.increment();
      this.clear();
    },
    onSubmit() {
      this.isSubmitted = false;
    },
  },
};
</script>

<template>
  <div>
    <div class="container p-5">
      <Navbar />
      <div id="success-message" class="" v-if="isSubmitted">Successfully submitted response</div>
      <div>
        <form
          @submit="onSubmit"
          class="flex flex-col items-center justify-center"
        >
          <input
            placeholder="username"
            v-model="username"
            id="username-input"
            type="text"
            class="m-3 p-3 rounded-md bg-gray-300"
          />
          <input
            placeholder="password"
            v-model="password"
            id="password-input"
            type="password"
            class="m-3 p-3 rounded-md bg-gray-300"
          />
          <button
            id="submit-button"
            type="submit"
            class="m-3 p-3 rounded-md bg-gray-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
