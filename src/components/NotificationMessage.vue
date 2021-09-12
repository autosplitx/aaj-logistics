<template>
  <div
    :class="typeClass"
    role="alert"
  >
    <h4 class="alert-header">
      <strong v-if="notification.type == 'danger'"
        ><i class="fas fa-exclamation-triangle"></i> Error!</strong
      >
      <strong v-else
        ><i class="fas fa-check"></i> Success!</strong
      >
    </h4>
    <hr />
    <div class="toast-body">
      <p>{{ notification.message }}</p>
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
.danger {
  color: #dc3545 !important;
}
.success {
  color: var(--aaj-yellow-green) !important;
}
</style>
