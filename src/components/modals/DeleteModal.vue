<template>
  <div>
    <b-modal v-model="show">
      <p>Are you sure you want to delete this user?</p>
      <template #modal-footer>
        <button
          @click="show = false"
          v-b-modal.modal-close_visit
          class="btn btn-danger btn-sm m-1"
        >
          Cancel
        </button>
        <button
          @click="submit"
          v-b-modal.modal-close_visit
          class="btn btn-success btn-sm m-1"
        >
          Delete
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    showDeleteModal: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },

  methods: {
    submit() {
      console.log("submit");
      this.$store.dispatch(
        "users/deleteUser",
        this.$store.state.users.deletedId
      );
      this.show = false;
    },
  },
  watch: {
    showDeleteModal() {
      this.show = true;
    },
  },
};
</script>

<style></style>
