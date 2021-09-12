<template>
  <div :class="['notoficationList', notifications]">
    <NotificationMessage
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
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
  // computed: mapState("notifications", ["notifications"]),
};
</script>

<style scoped>
.notoficationList {
  position: fixed;
  bottom: 10px;
  right: 15px;
  width: 250px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 1rem;
  /* background: transparent; */
  background-color: var(--aaj-primary-h10);
  color: #fff;
  border-radius: 20px;
  display: none;
}
</style>
