<template>
  <div class="page-loader" v-if="!isLoaded">
    <div class="flex">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
    <div class="w-100">
      <img src="../assets/logo.png" alt="AAJ Logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
      }
    };
  },
};
</script>

<style scoped>
.w-100 {
  margin-top: 1rem;
}
img {
  display: block;
  width: 30%;
  margin: auto;
}
.page-loader {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--aaj-blue-h);
  z-index: 999;
}

.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}

.cube:nth-child(1) {
  background-color: var(--aaj-primary-h);
  animation: left 1s infinite;
}
.cube:nth-child(2) {
  background-color: var(--aaj-yellow-h);
}
.cube:nth-child(3) {
  background-color: var(--aaj-blue-h10);
}
.cube:nth-child(4) {
  background-color: var(--aaj-yellow-green-h);
  animation: right 1s infinite 0.5s;
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
