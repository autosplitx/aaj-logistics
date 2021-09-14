<template>
  <div class="bearer">
    <!-- <img src="/img/aaj/hero.jpg" alt="Bearer Flag" /> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bearer {
  background-image: url("/img/aaj/hero.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  object-fit: cover;
  width: 100%;
  height: 60vh;
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
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
