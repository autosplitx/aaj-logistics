<template>
  <div :class="{ 'notification-list': notification }">
    <div :class="typeClass" role="alert">
      <h4 :class="notification.type == 'danger' ? 'danger' : 'success'">
        <strong v-if="notification.type == 'danger'">
          <i class="fas fa-exclamation-triangle"></i> Error!
        </strong>
        <strong v-else><i class="fas fa-check"></i> Success!</strong>
      </h4>
      <hr />
      <div class="toast-body">
        <p class="my-1">{{ notification.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],

  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },

  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 5000);
  },

  beforeUnmount() {
    clearTimeout(this.timeout);
  },

  methods: mapActions(["removeNotification"]),
};
</script>

<style scoped>
.notification-list {
  position: fixed;
  bottom: 10px;
  right: 15px;
  width: 330px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 1rem;
  background-color: var(--aaj-primary-h10);
  border-radius: 20px;
}
.danger {
  color: var(--aaj-primary-h1);
}
.success {
  color: var(--aaj-blue-h1);
}
p {
  color: #fff;
}
</style>
