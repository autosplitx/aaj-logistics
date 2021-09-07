<template>
  <div class="logo">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <img src="/img/aaj/logo.png" alt="AAJ Logistics" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo {
  background: var(--aaj-primary-h10);
  padding: 0.5rem;
}
.logo img {
  display: block;
  width: 80px;
}
</style>
