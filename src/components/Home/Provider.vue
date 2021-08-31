<template>
  <div class="provider">
    <div class="container pb">
      <div class="provider-heading">
        <h2>The solutions provider with services that fit your needs.</h2>
        <h3>
          From personal needs to platform integrations, we are ready to work
          with you.
        </h3>
      </div>
      <div class="grid grid-3">
        <div class="hoverable">
          <h5>Personal</h5>
          <p>
            We are here for the simple things. Use AAJExpress for one-off local
            and international deliveries, e-commerce payments, bill payments and
            more.
          </p>
        </div>
        <div class="hoverable">
          <h5>Online, offline &amp; Social Sellers</h5>
          <p>
            Do you own your own physical store, e-commerce website or you sell
            on Instagram? We have services that help you increase your
            visibility and grow your sales.
          </p>
        </div>
        <div class="hoverable">
          <h5>Retailers &amp; Brands</h5>
          <p>
            Increase visibility and distribution for your products and services
            using our platform. We'd love to help you acheive more.
          </p>
        </div>

        <div class="hoverable">
          <h5>Couriers</h5>
          <p>
            Improve your operations and sales by working with us. You can expand
            your services using our network.
          </p>
        </div>
        <div class="hoverable">
          <h5>Platforms &amp; Market Places</h5>
          <p>
            Are you building marketplace that requires payments and deliveries?
            Do you need to automate distribution of products and services?
            You've come to the right place.
          </p>
        </div>
        <div class="hoverable">
          <h5>Agents &amp; Franchise Partners</h5>
          <p>
            Increase your income and maximize utility of your free space by
            joining our network. Find out how right away
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.provider h2 {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--color-blue-darkest);
}
.provider {
  background-color: var(--color-blue-darkest);
}
.provider-heading {
  margin: 6rem 0 3rem;
}
.provider h2 {
  color: #fff;
}
.provider h3 {
  font-size: 1.2rem;
  font-weight: 700;
  opacity: 0.6;
}
.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}
.provider .grid h5 {
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.grid-3 .hoverable {
  height: 250px;
  padding: 1rem;
  background-color: var(--color-blue-light);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition: background 0.2s ease-out;
}
.grid-3 .hoverable:hover {
  background: var(--primary-color);
}
.grid-3 .hoverable:hover > h5 {
  color: var(--color-gray-default);
}
.grid-3 p {
  color: #fff;
}
.pb {
  padding-bottom: 3rem;
}

@media (max-width: 641px) {
  .provider {
    padding: 0 0.8rem;
  }
  .provider h2 {
    font-weight: 600;
  }
  .provider-heading {
    margin: 3rem 0 2rem;
  }
  .provider h3 {
    font-weight: 500;
  }
  .grid-3 {
    grid-template-columns: 1fr;
  }
  .grid-3 .hoverable {
    height: 200px;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
