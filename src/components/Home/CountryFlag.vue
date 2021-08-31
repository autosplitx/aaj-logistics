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
  padding: 0 0 5rem;
  background-color: #fff;
}
.bearer .flex {
  justify-content: space-between;
  margin-bottom: 1rem;
}
.bearer img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

@media (max-width: 641px) {
  .country-flag {
    padding: 0 0.8rem 1rem;
  }
  .bearer img {
    width: 50px;
    height: 50px;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
