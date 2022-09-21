<template>
  <div>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <b-form @submit.prevent="">
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
          name="password"
          :rules="{ required: true, min: 9 }"
          v-slot="validationContext"
        >
          <b-form-group
            id="password"
            label="Password"
            label-for="password-input"
          >
            <b-form-input
              type="password"
              id="password-input"
              name="password-input"
              v-model="form.password"
              :state="getValidationState(validationContext)"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-1-live-feedback">{{
              validationContext.errors[0]
            }}</b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>

        <validation-provider
          v-if="toggleForm"
          name="confirmPassword"
          :rules="{ required: true, min: 9 }"
          v-slot="validationContext"
        >
          <b-form-group
            id="confirmPassword"
            label="confirmPassword"
            label-for="confirmPassword-input"
          >
            <b-form-input
              type="password"
              id="confirmPassword-input"
              name="confirmPassword-input"
              v-model="form.confirmPassword"
              :state="getValidationState(validationContext)"
              aria-describedby="input-1-live-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="input-1-live-feedback">{{
              validationContext.errors[0]
            }}</b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>

        <b-button type="submit" @click="handleSubmit(submit)" variant="success"
          >Submit</b-button
        >
        <b-button class="ml-2" @click="resetForm()">Reset</b-button>
      </b-form>
    </validation-observer>
    <b-row>
      <b-col cols="12" class="d-flex justify-content-end mt-3">
        <span
          class="ml-auto fs-12 text-success cursor-pointer"
          @click="toggleForm = !toggleForm"
          >Do not have account?!</span
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      toggleForm: false,
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("auth/login", {
        email: this.form.email,
        password: this.form.password,
      });
    },
    async signup() {
      await this.$store.dispatch("auth/signup", {
        email: this.form.email,
        password: this.form.password,
      });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
    async submit() {
      try {
        if (this.toggleForm) await this.signup();
        else await this.login();
        this.$router.push("/users");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss"></style>
