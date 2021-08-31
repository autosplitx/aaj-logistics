<template>
  <footer class="footer">
    <div class="container">
      <div class="terms">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Buyer & Seller Protection</a>
      </div>

      <p>Shop F217, First Floor Tejuosho Ultra modern market.</p>
      <p>Yaba, Lagos State</p>
      <p>info@aajexpress.org</p>
      <p>(+234)-906-610-4397</p>
      <p>(+234)-813-226-9487</p>
      <a href="#">www.aajexpress.org</a> <br />
      <a href="#">www.aajexpress.org/app</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 3rem 0;
  text-align: right;
  background: var(--color-blue-darkest);
}
.footer :where(h1, p, a) {
  font-size: 0.8rem;
  color: hsl(0, 0%, 70%);
  letter-spacing: 1.5px;
  line-height: 1.5;
}
.terms a {
  display: inline-block;
  font-weight: 700;
  margin-left: 0.8rem;
}
.footer a:hover {
  text-decoration: underline;
  color: hsl(0, 0%, 100%);
}

@media (max-width: 641px) {
  .footer {
    padding: 2rem 0;
    text-align: center;
  }
  .footer :where(h1, p, a) {
    letter-spacing: 0;
    line-height: 2;
  }
  .terms a {
    display: inline-block;
    font-weight: 500;
    margin-left: 0.8rem;
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}
</style>
