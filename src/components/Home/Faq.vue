<template>
  <div class="faq">
    <div class="container">
      <div class="text-center">
        <h2>Frequently Asked Questions</h2>
        <h3>
          Here are some common questions asked about transacting with
          AAJExpress.
        </h3>
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
  padding: 1.5rem 0 3rem;
  background: var(--color-gray-light);
}
.faq h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--aaj-blue-h1);
}
.faq h3 {
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--aaj-blue-h1);
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .faq {
    padding: 6rem 0;
  }
  .text-center {
    margin-bottom: 5rem;
  }
  .faq h2 {
    font-size: 1.8rem;
  }
  .faq h3 {
    font-size: 1rem;
    font-weight: 500;
  }
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
