<template>
  <div class="home-page">
    <Header />

    <Hero />

    <div class="wrapper">
      <Shipping />

      <CountryFlag />

      <Provider />

      <Ecommerce />

      <Faq />

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Hero from "./Home/Hero.vue";
import Shipping from "./Home/Shipping.vue";
import CountryFlag from "./Home/CountryFlag.vue";
import Provider from "./Home/Provider.vue";
import Ecommerce from "./Home/Ecommerce.vue";
import Faq from "./Home/Faq.vue";
import Footer from "./Home/Footer.vue";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  components: {
    Header,
    Hero,
    Shipping,
    CountryFlag,
    Provider,
    Ecommerce,
    Faq,
    Footer,
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #fff;
}
.home-page {
  background-image: url("/img/aaj/aaj_deliveries.svg");
  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  background-size: 50%;
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
</style>
