<template>
  <div class="faq">
    <div class="container">
      <div class="text-center">
        <h3>Frequently Asked Questions</h3>
        <p>
          Here are some common questions asked about transacting with
          AAJExpress.
        </p>
      </div>

      <Accordion />
    </div>
  </div>
</template>

<script>
import Accordion from "./Accordion.vue";
export default {
  components: { Accordion },
};
</script>

<style scoped>
.faq {
  padding: 6rem 0;
  background: var(--color-gray-light);
}
.faq h3 {
  color: var(--color-blue-darkest);
  font-size: 1.8rem;
  font-weight: 600;
}
.faq p {
  font-size: 1.2rem;
  font-weight: 500;
}

@media (max-width: 641px) {
  .faq {
    padding: 4rem 0.8rem;
  }
  .faq h3 {
    font-size: 1.45rem;
    font-weight: 700;
  }
  .faq p {
    font-size: 1rem;
    font-weight: 400;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
