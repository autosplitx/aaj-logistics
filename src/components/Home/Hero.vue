<template>
  <section class="container">
    <div class="hero">
      <aside class="aside-left container">
        <div class="hero-text">
          <h2>Deliveries for e-commerce and social commerce sellers</h2>
          <h3>
            We help you with local and international deliveries to your
            customers anywhere in the world.
          </h3>
        </div>

        <div class="account">
          <a href="#" class="btn btn-prinary">Create an account</a>
          <a href="#" class="btn btn-prinary">Sign in</a>
        </div>
      </aside>
      <aside class="aside-right">
        <img src="/img/aaj/aaj_deliveries.svg" alt="AAJ Deliveries" />
      </aside>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 10px;
}

.hero-text h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--aaj-blue-h1);
}

.hero-text h3 {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--aaj-gray-dark);
  margin: 1rem 0;
}

.account .btn {
  padding: 0.6rem 1rem;
  margin: 0.5rem 1rem 0.5rem 0;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 500;
  border-radius: 2px;
}

.account .btn:nth-child(1) {
  background: var(--aaj-blue-h1);
}

.aside-left {
  margin-top: 1.5em;
}

.aside-right {
  margin-top: 4rem;
}

.aside-right img {
  display: block;
  width: 100%;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .hero-text h2 {
    font-size: 2.1rem;
  }

  .hero-text h3 {
    font-size: 1.2rem;
    margin: 1.5rem 0;
  }
}
@media (min-width: 360px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .hero-text h2 {
    font-size: 2.3rem;
  }

  .hero-text h3 {
    margin: 1.8rem 0;
  }
}
@media (min-width: 375px) {
  .hero-text h2 {
    font-size: 2.5rem;
  }

  .hero-text h3 {
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  .account .btn {
    padding: 0.8rem 1rem;
    margin: 0.8rem 1rem 0.8rem 0;
  }
}
@media (min-width: 411px) {
  .hero-text h2 {
    font-size: 2.7rem;
  }

  .hero-text h3 {
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  .account .btn {
    padding: 0.8rem 1rem;
    margin: 0.8rem 1rem 0.8rem 0;
  }
}
@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .hero {
    grid-template-columns: repeat(2, 1fr);
    padding: 1rem;
  }

  .hero-text h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  .hero-text h3 {
    font-size: 1.4rem;
    font-weight: 400;
    margin: 1.5rem 0;
  }

  .account .btn {
    padding: 0.6rem 1rem;
    font-size: 1em;
  }

  .aside-right {
    display: none;
  }
}
@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  .hero {
    grid-template-columns: 5fr 3fr;
    padding: 0;
  }
  .aside-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    height: 80vh;
    overflow: hidden;
  }
  .hero-text h2 {
    font-size: 2.8rem;
    font-weight: 600;
    color: var(--aaj-blue-h1);
  }
  .hero-text h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0 2rem;
  }
  .account .btn {
    padding: 0.8em 1em;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 3rem;
  }
  .aside-right {
    display: none;
  }
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
