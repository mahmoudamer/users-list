<template>
  <div id="app" :class="themeClass">
    <!-- <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div>
      <b-form-select
        v-model="themeClass"
        :options="options"
        size="sm"
      ></b-form-select>
    </div> -->
    <!-- <nav class="d-flex align-items-center justify-content-between px-5 py-3">
    </nav> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      themeClass: "light",
      options: [
        { value: "light", text: "light" },
        { value: "dark", text: "dark" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
