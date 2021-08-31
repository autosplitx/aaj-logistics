<template>
  <header class="top-head">
    <nav class="nav container">
      <div class="logo">
        <img src="/img/aaj/logo.png" alt="AAJ Logistics" />
      </div>
      <div class="login"><a href="#">Sign in</a></div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.top-head {
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all 0.25s ease-in;
}
.scrolling-active {
  background: #fff;
  color: var(--primary-color);
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.1);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.nav img {
  display: block;
  width: 80px;
}
.login a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  transition: background 0.3s ease;
}
.login a:hover {
  background: hsl(25, 100%, 35%);
}

@media (max-width: 641px) {
  .top-head {
    padding: 0.5rem 0;
  }
  .nav.container {
    padding: 0 0.5rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
