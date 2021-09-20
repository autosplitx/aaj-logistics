<template>
  <div class="home-page">
    <Header />

    <Hero :authenticated="authenticated" />

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
import { mapGetters } from "vuex";
import Header from "./Header.vue";
import Hero from "./Hero.vue";
import Shipping from "./Shipping.vue";
import CountryFlag from "./CountryFlag.vue";
import Provider from "./Provider.vue";
import Ecommerce from "./Ecommerce.vue";
import Faq from "./Faq.vue";
import Footer from "./Footer.vue";
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

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #fff;
}
.home-page {
  position: relative;
  background-image: url("/img/aaj/aaj_deliveries.svg");
  background-attachment: fixed;
  background-position: right 83%;
  background-repeat: no-repeat;
  background-size: 20%;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .home-page {
    background-position: right 83%;
  }
}
@media (min-width: 360px) {
  .home-page {
    background-position: right 84%;
  }
}
@media (min-width: 375px) {
  .home-page {
    background-position: right 82%;
  }
}
@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}
@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .home-page {
    background-position: right 30%;
    background-size: 60%;
  }
}
@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .home-page {
    background-position: right;
    background-size: 45%;
  }
}
@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
