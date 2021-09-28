<template>
  <div>
    <h5>Welcome to Profile</h5>
    <!-- <EditUser /> -->
    {{ form }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import EditUser from "@/components/Auth/Signup.vue";
export default {
  name: "Profile",
  components: {},

  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        country: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
        refcode: "",
      },
    };
  },

  // created() {
  //   this.form.fill(this.user);
  // },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions("auth", ["updateUser"]),
  },
};
</script>

<style scoped></style>
