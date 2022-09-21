<template>
  <b-row class="card-container shadow-light p-2 mb-1">
    <b-col
      cols="12"
      sm="3"
      class="d-flex justify--content-md-start align-items-center"
    >
      <b-img :src="user.img" rounded="circle" width="35" height="35" />
      <span class="mx-3">{{ user.name }}</span>
    </b-col>
    <b-col
      cols="12"
      sm="3"
      class="d-flex justify-content-md-center align-items-center"
    >
      <span> {{ user.email }} </span>
    </b-col>
    <b-col
      cols="12"
      sm="3"
      class="d-flex justify-content-md-center align-items-center"
    >
      <b-badge> {{ user.role }} </b-badge>
    </b-col>
    <b-col
      cols="12"
      sm="3"
      class="d-flex justify-content-md-end align-items-center"
    >
      <b-icon-pencil-square @click="editUser" class="mx-4 cursor-pointer" />
      <b-icon-trash @click="deleteUser" class="cursor-pointer" />
    </b-col>
  </b-row>
</template>
<script>
import { BIconTrash, BIconPencilSquare } from "bootstrap-vue";
export default {
  components: {
    BIconPencilSquare,
    BIconTrash,
  },
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({
        id: null,
        name: null,
        img: null,
        role: null,
      }),
    },
  },
  data() {
    return {};
  },

  methods: {
    editUser() {
      this.$store.commit("users/SET_EDITED_USER", this.user);
      this.$emit("editUser");
    },
    deleteUser() {
      console.log(this.user.id);
      this.$store.commit("users/SET_DELETED_ID", this.user.id);
      this.$emit("deleteUser");
    },
  },
};
</script>
<style lang="scss" scoped>
.card-container {
  //   border: 1px solid lightgray;
  border-radius: 5px;
}
</style>
