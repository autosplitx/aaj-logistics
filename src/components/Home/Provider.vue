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
.provider {
  padding: 0 0.8rem;
  background-color: var(--aaj-blue-h1);
}
.provider-heading {
  margin: 3rem 0;
}
.provider h2 {
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
}
.provider h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0;
  color: var(--aaj-blue-h10);
}
.grid-3 {
  grid-template-columns: 1fr;
}
.provider .grid h5 {
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: var(--aaj-gray-light);
  font-weight: 500;
}
.grid-3 .hoverable {
  height: 250px;
  padding: 1rem;
  background-color: var(--color-blue-light);
  transition: background 0.2s ease-out;
}
.grid-3 .hoverable:hover {
  background: var(--aaj-orange-red);
}
.grid-3 p {
  color: #fff;
}
.pb {
  padding-bottom: 3rem;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .provider h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .provider h3 {
    font-size: 1rem;
    margin: 0;
  }
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .provider .grid h5 {
    font-size: 0.76rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops and desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .provider-heading {
    margin: 6rem 0 3rem;
  }
  .provider h2 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
  }
  .provider h3 {
    font-size: 1.2rem;
  }
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .grid-3 .hoverable {
    height: 250px;
    padding: 1rem;
  }
  .pb {
    padding-bottom: 6rem;
  }
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
