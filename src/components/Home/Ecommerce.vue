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
              <img src="/img/aaj/p11.jpg" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p12.jpeg" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p13.png" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p14.jpg" alt="Comming Soon" />
            </div>
            <div class="card">
              <img src="/img/aaj/p15.png" alt="Comming Soon" />
            </div>
          </div>
        </div>
        <div class="product-details">
          <div class="flex">
            <h5 class="bold">E-COMMERCE</h5>
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
            ><span>CREATE YOUR OWN STORE</span> &rarr;</a
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
  padding: 6rem 0;
  background-color: #fff;
}
.initial {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
}
.ecommerce img {
  display: block;
  width: 100%;
  border-radius: 10px;
}
.ecommerce .flex {
  justify-content: flex-start;
}
.ecommerce .flex .btn {
  box-shadow: none;
  border-radius: 0;
  padding: 5px;
  margin-left: 0.5rem;
  font-size: 0.6rem;
}
.ecommerce .grid.grid-3 {
  gap: 0;
  margin-right: 2rem;
}
.ecommerce h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-blue-darkest);
}
a.text-danger {
  font-size: 0.7rem;
}
a.text-danger:hover span {
  text-decoration: underline;
}

@media (max-width: 641px) {
  .ecommerce {
    padding: 4rem 0.8rem;
  }
  .initial {
    grid-template-columns: 1fr;
    grid-template-areas: "product-details" "products";
    gap: 20px;
  }

  .product-details {
    grid-area: product-details;
  }
  .products {
    grid-area: products;
  }
  .ecommerce .flex .btn {
    padding: 5px;
    margin-left: 0.5rem;
    font-size: 0.6rem;
  }
  .ecommerce .grid.grid-3 {
    margin: 0 0 1rem;
  }
  .ecommerce h1 {
    font-size: 2rem;
    font-weight: 700;
  }
  a.text-danger {
    font-size: 0.7rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
