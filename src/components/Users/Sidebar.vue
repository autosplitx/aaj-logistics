<template>
  <aside>
    <div class="backdrop"></div>

    <div class="homesidebar homeside">
      <div class="sidebar-logo">
        <router-link :to="{ name: 'User' }">
          <img src="/img/aaj/user1.png" alt="Customer's Avatar" />
          <p>{{ userName }}</p>
        </router-link>

        <div class="divider"></div>

        <div class="sidebar-tabs">
          <h1>Sidebar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            inventore corporis assumenda quaerat atque quia error minima ut
            ipsum incidunt reprehenderit, autem placeat ea reiciendis rem
            suscipit quisquam aliquam optio.
          </p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default { name: "Sidebar", props: ["userName"] };
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: none;
}

.backdrop--active {
  display: block;
}

.homesidebar {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 18rem;
  height: 100vh;
  overflow-y: scroll;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  z-index: 3;
}

.homesidebar ul li a.white {
  display: block;
  padding: 0.5rem 0.8rem;
  color: var(--color-gray-darker);
}

.homesidebar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

.homesidebar::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #d9534f, #ff165e, #d9534f);
  border-radius: 10px;
}

.homesidebar::-webkit-scrollbar-track {
  background: var(--color-gray-default);
}

.homeside {
  left: 0;
  transform: translateX(-100%);
}
</style>
