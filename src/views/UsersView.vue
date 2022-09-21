<template>
  <DefaultLayout>
    <b-container class="py-5">
      <UserCard
        v-for="(user, index) in paginatedItems"
        :key="index"
        :user="user"
        @editUser="showUserModal = !showUserModal"
        @deleteUser="showDeleteModal = !showDeleteModal"
      />
      <b-row class="justify-content-center justify-content-md-end">
        <b-col cols="2" class="px-0 mt-3">
          <b-btn
            variant="success"
            @click="showUserModal = !showUserModal"
            class="w-100"
            >Add User</b-btn
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12 d-flex justify-content-center">
          <b-pagination
            @change="onPageChanged"
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            pills
          ></b-pagination>
        </b-col>
      </b-row>
      <UserModal :showUserModal="showUserModal" />
      <DeleteModal :showDeleteModal="showDeleteModal" />
    </b-container>
  </DefaultLayout>
</template>

<script>
import UserCard from "@/components/UserCard.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UserModal from "@/components/modals/UserModal.vue";
import DeleteModal from "@/components/modals/DeleteModal.vue";
export default {
  components: { UserCard, DefaultLayout, UserModal, DeleteModal },
  data() {
    return {
      showUserModal: false,
      showDeleteModal: false,
      perPage: 5,
      currentPage: 1,
      paginatedItems: [],
    };
  },
  mounted() {
    this.paginate(this.perPage, 0);
  },
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.users;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
  computed: {
    users() {
      return this.$store.state.users.data;
    },
    totalRows() {
      return this.$store.state.users.data.length;
    },
  },
  watch: {
    users() {
      console.log("changed");
      this.paginate(this.perPage, this.currentPage - 1);
    },
  },
};
</script>
