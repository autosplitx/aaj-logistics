<template>
  <div class="ecommerce">
    <div class="container">
      <div class="initial">
        <div class="products">
          <div class="grid grid-3">
            <div class="card">
              <img src="/img/aaj/p10.jpeg" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p12.jpeg" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p11.jpg" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p13.png" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p15.png" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p14.jpg" alt="Comming Soon" />
            </div>
          </div>
        </div>
        <div class="product-details">
          <div class="flex">
            <h5 class="bold">E-Commerce</h5>
            <button class="btn">COMING SOON</button>
          </div>
          <h1>Create your online store and get discovered by new buyers.</h1>
          <p class="my-1">
            From everyday essentials to fashion, hair extensions, groceries,
            food, cosmetics and beverages, merchants that ship with us sell
            these products. Now, you too can be one of them.
          </p>
          <div class="divider"></div>
          <a href="#" class="text-danger"
            ><span>Create your own store</span> &rarr;</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ecommerce {
  padding: 3rem 0.5rem 1.5rem;
}
.ecommerce img {
  display: block;
  width: 100%;
  border-radius: 10px;
}
.initial {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  grid-template-areas: "product-details" "products";
  gap: 20px;
}
.product-details {
  grid-area: product-details;
}
.products {
  grid-area: products;
}
.products .grid {
  gap: 10px;
}
.products .card {
  padding: 0;
  width: 90%;
  margin: 5px auto;
}
.product-details .flex {
  justify-content: flex-start;
}
.product-details .flex h5 {
  font-size: 0.8rem;
  text-transform: uppercase;
}
.product-details .flex .btn {
  padding: 0.3rem 0.8rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  border-radius: 0;
  color: var(--aaj-gray-light);
  background: var(--aaj-blue-h1);
}
.ecommerce .grid.grid-3 {
  grid-template-columns: repeat(2, 1fr);
  margin: 0 0 1rem;
}
.ecommerce h1 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--aaj-blue-h1);
  margin-top: 0.8rem;
}
.ecommerce p {
  font-size: 1rem;
  font-weight: 400;
  margin: 1.5rem 0;
  color: var(--aaj-blue-h1);
}
.product-details a {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0.8rem 0 0;
}
a.text-danger:hover span {
  text-decoration: underline;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 411px) {
  .ecommerce h1 {
    font-size: 1.8rem;
    margin-top: 0.8rem;
  }
  .ecommerce p {
    font-size: 1.15rem;
  }
}
@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .ecommerce {
    padding: 3rem 0.8rem;
  }
  .initial {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "products product-details";
  }
  .product-details {
    grid-area: product-details;
  }
  .products {
    grid-area: products;
  }
  .products .grid {
    gap: 10px;
  }
  .ecommerce .grid.grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .ecommerce h1 {
    font-size: 1.7rem;
    font-weight: 600;
  }
  .ecommerce p {
    font-size: 1rem;
    font-weight: 400;
    margin: 1.5rem 0;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .ecommerce {
    padding: 6rem 0;
  }
  .initial {
    grid-template-columns: 3fr 2fr;
    gap: 120px;
  }
  .ecommerce .grid.grid-3 {
    gap: 10px;
  }
  .ecommerce h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  .ecommerce p {
    font-size: 1rem;
    font-weight: 500;
    margin: 2rem 0;
    color: var(--aaj-blue-h1);
  }
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
