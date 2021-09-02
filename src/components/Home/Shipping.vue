<template>
  <div class="shipping text-center">
    <div class="my-5">
      <h4>Shipping</h4>
      <h2 class="py-1">
        Local &amp; International shipping for personal and business use
      </h2>
      <h3>
        Request a pickup or delivery from you or from the seller and we'll get
        it delivered to where you need it to go.
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shipping {
  padding: 0.5rem;
  background-color: #fff;
}
.shipping h2 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--aaj-blue-h1);
}
.shipping h3 {
  font-size: 1.16rem;
  font-weight: 300;
  color: var(--aaj-gray-dark);
  margin-top: 0.8rem;
}
.shipping h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--aaj-primary);
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .shipping {
    padding: 0.5rem;
  }
  .shipping h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--aaj-blue-h1);
  }
  .shipping h3 {
    font-size: 1.2rem;
  }
  .shipping h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--aaj-primary);
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .shipping {
    padding: 3rem 0;
    background-color: #fff;
  }
  .shipping h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--primary-color);
  }
  .shipping h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--aaj-blue-h1);
  }
  .shipping h3 {
    width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    font-weight: 500;
  }
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
