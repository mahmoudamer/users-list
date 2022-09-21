<template>
  <b-container fluid>
    <b-row>
      <b-col
        md="4"
        class="d-none d-md-flex colored-bg justify-content-center align-items-center font-weight-bold"
      >
        Dashboard
      </b-col>
      <b-col
        cols="12"
        md="8"
        class="col-12 form-container d-flex justify-content-center align-items-center"
      >
        <b-row class="justify-content-center w-100">
          <b-col cols="12" sm="12" md="6">
            <SignIn />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import * as firebase from "firebase/auth";
import SignIn from "@/components/SignIn.vue";

export default {
  name: "HomeView",
  components: {
    SignIn,
  },
  mounted() {
    firebase.createUserWithEmailAndPassword("mahmoud@gmail.com", "password");
  },
};
</script>
<style lang="scss">
.form-container {
  background: #f5f5f5;
  height: 100vh;
}
.colored-bg {
  background: #28a745;
  height: 100vh;
  font-size: 3rem;
  color: #f5f5f5;
}
</style>
