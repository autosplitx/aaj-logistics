<template>
  <div class="country-flag">
    <div class="bearer">
      <div class="flex container">
        <div>
          <img src="/img/aaj/flag-nigeria.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-austria.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-argentina.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-belgium.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/france-flag.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-america.gif" alt="Bearer Flag" />
        </div>
      </div>
    </div>

    <div class="bearer">
      <div class="flex container">
        <div>
          <img src="/img/aaj/flag-nigeria.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-austria.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-argentina.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-belgium.gif" alt="Bearer Flag" />
        </div>
      </div>
    </div>

    <div class="bearer">
      <div class="flex container">
        <div>
          <img src="/img/aaj/flag-nigeria.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-austria.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-argentina.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-belgium.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/france-flag.gif" alt="Bearer Flag" />
        </div>
        <div>
          <img src="/img/aaj/flag-america.gif" alt="Bearer Flag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.country-flag {
  padding: 0 0.8rem 3rem;
  background-color: #fff;
}
.bearer .flex {
  justify-content: space-between;
  margin-bottom: 1rem;
}
.bearer img {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .country-flag {
    padding: 0 1rem 3rem;
  }
  .bearer img {
    width: 80px;
    height: 80px;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .country-flag {
    padding: 0 0 5rem;
  }
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
