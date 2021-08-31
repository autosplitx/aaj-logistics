<template>
  <div class="accordion mt-4 my-1">
    <div class="a-container">
      <h4 class="a-btn">How do I get started? <span></span></h4>
      <div class="a-panel">
        <p>
          It’s simple! All you have to do is sign up, complete the on-boarding
          process and an will be created for you.
        </p>
      </div>
    </div>

    <div class="a-container">
      <h4 class="a-btn">How does shipping work? <span></span></h4>
      <div class="a-panel">
        <p>
          AAJExpress shipping is effortless. All you have to do is simply log in
          and request a delivery.
        </p>
      </div>
    </div>

    <div class="a-container">
      <h4 class="a-btn">Where can I ship to? <span></span></h4>
      <div class="a-panel">
        <p>
          Anywhere locally and internationally! With AAJExpress delivery,
          distance is not a barrier.
        </p>
      </div>
    </div>

    <div class="a-container">
      <h4 class="a-btn">
        What type of items can be shipped via AAJExpress?
        <span></span>
      </h4>
      <div class="a-panel">
        <p>
          The short answer is almost anything. However, there are a some
          categories of items cannot handle. This is mostly due to regulatory
          reasons or restrictions placed by government agencies.
        </p>
      </div>
    </div>

    <div class="a-container">
      <h4 class="a-btn">What will I be charged for? <span></span></h4>
      <div class="a-panel">
        <p>
          We charge you a delivery fee, based on the route and weight of your
          package. For items sold using the AAJExpress for Business platform, we
          also charge a 2.5% of the total value of every product sold on the
          platform.
        </p>
      </div>
    </div>

    <div class="a-container">
      <h4 class="a-btn">What can I sell using AAJExpress? <span></span></h4>
      <div class="a-panel">
        <p>
          You can sell absolutely anything! From everyday essentials to fashion,
          hair extensions, cosmetics, skin care products, groceries, food, and
          beverages. However, only certain Items can be displayed on the
          AAJExpress marketplace.
        </p>
      </div>
    </div>

    <div class="a-container">
      <h4 class="a-btn">
        Do I need to pay for marketing my products listed on the platform??
        <span></span>
      </h4>
      <div class="a-panel">
        <p>
          No, you don’t. However, to reach a wider audience we are able to offer
          extended marketing services at an affordable rate.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.accordion .a-container .a-panel {
  /* width: 100%; */
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  height: auto;
  max-height: 0;
  overflow: hidden;
  padding: 0 10px;
}

.accordion .a-container.active .a-panel {
  padding: 1rem 0.6rem 0.6rem;
  opacity: 1;
  height: auto;
  max-height: 500px;
}

.a-container.active span::before {
  transform: rotate(0);
}

.a-btn {
  position: relative;
  padding: 0.8rem 1.5rem;
  width: 100%;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

.a-btn span {
  display: block;
  position: absolute;
  height: 12px;
  width: 12px;
  right: 20px;
  top: 18px;
}

.a-btn span::after {
  content: "";
  width: 12px;
  height: 2px;
  background-color: #333;
  position: absolute;
  top: 6px;
}

.a-btn span::before {
  content: "";
  width: 12px;
  height: 2px;
  background-color: #333;
  position: absolute;
  top: 6px;
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;
}

@media (max-width: 641px) {
  .a-btn,
  .a-panel p {
    font-size: 0.8rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
