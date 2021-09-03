<template>
  <header class="top-head">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <img src="/img/aaj/logo.png" alt="AAJ Logistics" />
        </div>
        <div class="login">
          <router-link :to="{ name: 'Registration' }">Sign in</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.top-head {
  padding: 1rem 0.8rem;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all 0.25s ease-in;
}
.scrolling-active {
  background: #fff;
  color: var(--aaj-primary);
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.1);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo img {
  display: block;
  width: 80px;
}
.login a {
  display: block;
  padding: 0.5rem 1rem;
  background: var(--aaj-primary);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;
  transition: background 0.3s ease;
}
.login a:hover {
  background: hsl(25, 100%, 35%);
}

@media (min-width: 320px) {
  /*  */
}
@media (min-width: 481px) {
  /*  */
}
@media (min-width: 641px) {
  /*  */
  .top-head {
    padding: 0.5rem 0.8rem;
  }
  .logo img {
    width: 100px;
  }
  .login a {
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    font-weight: 400;
  }
}
@media (min-width: 961px) {
  /*  */
}
@media (min-width: 1025px) {
  .top-head {
    padding: 0.8rem 0;
  }
  .logo img {
    width: 100px;
  }
  .login a {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
@media (min-width: 1281px) {
  /*  */
}
</style>
