<template>
  <div class="shipping text-center">
    <div class="my-5">
      <h4>Shipping</h4>
      <h2 class="py-1">
        Local &amp; International shipping for personal and business use
      </h2>
      <h3>
        Request a pickup or delivery from you or from the seller and we'll get
        it <br />
        delivered to where you need it to go.
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shipping {
  padding: 5rem 0;
  background-color: #fff;
}
.shipping h2 {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--color-blue-darkest);
}
.shipping h2 {
  color: var(--color-blue-darkest);
}
.shipping h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-blue-darkest);
  opacity: 0.6;
  margin-top: 0.8rem;
}
.shipping h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--primary-color);
}

@media (max-width: 641px) {
  .shipping {
    padding: 2rem 0.8rem;
  }
  .my-5 {
    margin: 0;
  }
  .shipping h2 {
    font-weight: 600;
  }
  .shipping h3 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 0;
  }
  .shipping h4 {
    font-weight: 600;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
