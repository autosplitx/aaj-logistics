<template>
  <section class="container">
    <div class="grid">
      <aside class="aside-left container">
        <div>
          <h1>Deliveries for e-commerce and social commerce sellers</h1>
          <h3>
            We help you with local and international deliveries to your
            customers anywhere in the world.
          </h3>
        </div>

        <div class="account">
          <button class="btn btn-prinary">Create an account</button>
          <button class="btn btn-prinary">Sign in</button>
        </div>
      </aside>
      <aside class="aside-right"></aside>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  grid-template-columns: 4fr 3fr;
}
.aside-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* padding-left: 8rem; */
  margin-top: 50px;
  height: 80vh;
}
.aside-left h1 {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color-blue-darkest);
}
.aside-left h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-blue-darkest);
  opacity: 0.6;
  margin-top: 0.8rem;
}
.account .btn {
  padding: 1.2em 1em;
  margin-right: 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
}
.account .btn:nth-child(1) {
  background: var(--color-blue-darkest);
}
.aside-right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: hsl(25, 100%, 90%); */
}

@media (max-width: 641px) {
  .container {
    padding: 0.5rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .aside-left {
    margin-top: 0;
    height: auto;
  }
  .aside-left h1 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .aside-left :where(h3, .btn) {
    font-size: 1rem;
    font-weight: 500 !important;
    margin-top: 1.5rem;
  }
  .account .btn {
    padding: 1em;
  }
  .aside-right {
    display: none;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
