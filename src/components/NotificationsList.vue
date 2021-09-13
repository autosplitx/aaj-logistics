<template>
  <NotificationMessage
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification"
  />
</template>

<script>
import { mapState } from "vuex";
import NotificationMessage from "./NotificationMessage";
export default {
  name: "NotificationsList",
  components: {
    NotificationMessage,
  },

  computed: {
    ...mapState({
      notifications: (state) => state.notifications,
    }),
  },
};
</script>

<style scoped></style>
