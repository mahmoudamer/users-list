<template>
  <div>
    <NavBar />
    <slot></slot>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style></style>
