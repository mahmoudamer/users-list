<template>
  <div>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-modal v-model="show">
        <b-form @submit.stop.prevent="handleSubmit(submit)">
          <validation-provider
            name="Email"
            rules="required|email"
            v-slot="validationContext"
          >
            <b-form-group id="email" label="Email" label-for="email-input">
              <b-form-input
                id="email-input"
                name="email-input"
                v-model="form.email"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="name"
            rules="required"
            v-slot="validationContext"
          >
            <b-form-group id="name" label="name" label-for="name-input">
              <b-form-input
                id="name-input"
                name="name-input"
                v-model="form.name"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            name="img"
            :rules="{ required: true }"
            v-slot="validationContext"
          >
            <b-form-group id="img" label="img" label-for="img-input">
              <b-form-input
                id="img-input"
                name="img-input"
                v-model="form.img"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <validation-provider
            name="role"
            :rules="{ required: true }"
            v-slot="validationContext"
          >
            <b-form-group id="role" label="role" label-for="role-input">
              <b-form-input
                id="role-input"
                name="role-input"
                v-model="form.role"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="input-1-live-feedback">{{
                validationContext.errors[0]
              }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </b-form>
        <template #modal-footer>
          <button
            @click="show = false"
            v-b-modal.modal-close_visit
            class="btn btn-danger btn-sm m-1"
          >
            Cancel
          </button>
          <button
            @click="handleSubmit(submit)"
            v-b-modal.modal-close_visit
            class="btn btn-success btn-sm m-1"
          >
            Submit
          </button>
        </template>
      </b-modal>
    </validation-observer>
  </div>
</template>

<script>
export default {
  props: {
    showUserModal: {
      required: true,
      type: Boolean,
      default: false,
    },
    editedUser: {
      required: false,
      type: Object,
      default: () => ({
        id: "",
        name: "",
        email: "",
        img: "",
        role: "",
      }),
    },
  },
  data() {
    return {
      show: false,
      form: {
        name: "",
        email: "",
        img: "",
        role: "",
      },
    };
  },
  mounted() {},
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    submit() {
      console.log("this.submit");
      if (this.form.id) this.editUser();
      else this.addUser();
      this.show = false;
    },
    addUser() {
      console.log("add");
      this.$store.dispatch("users/addUser", this.form);
    },
    editUser() {
      console.log("edit");
      this.$store.dispatch("users/editUser", {
        id: this.toBeEditedUser.id,
        ...this.form,
      });
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        img: "",
        role: "",
      };
    },
  },
  watch: {
    showUserModal() {
      this.show = true;
    },
    toBeEditedUser() {
      this.form = { ...this.toBeEditedUser };
    },
    show(val) {
      if (!val) this.resetForm();
    },
  },
  computed: {
    toBeEditedUser() {
      return this.$store.state.users.toBeEditedUser;
    },
  },
};
</script>

<style></style>
