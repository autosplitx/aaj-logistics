<template>
  <div class="container">
    <div class="text-center">
      <div class="error">
        <img src="/img/aaj/404.svg" alt="Error 404" />
      </div>
      <div class="error mx-auto" data-text="404">404</div>
      <p class="lead text-gray-800 mb-5">Page Not Found</p>
      <p class="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <router-link :to="{ name: 'Home' }">
        &larr; Please take me to the homepage
      </router-link>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Notfound",
};
</script>

<style scoped>
.container {
  height: 100vh;
}
.error img {
  display: block;
  width: 80%;
  margin: 40% auto 10%;
}

a {
  display: block;
  color: #fff;
  background: var(--aaj-primary-h1);
  padding: 1rem;
  margin: 1rem;
  border-radius: 25px;
}

@media (min-width: 1025px) {
  .error img {
    width: 50%;
    margin: 5rem auto 3rem;
  }

  a {
    width: 40%;
    margin: 1rem auto;
  }

  a:hover {
    background: var(--aaj-blue-h1);
  }
}
</style>
