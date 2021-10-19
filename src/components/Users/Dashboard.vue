<template>
  <div class="customer">
    <Modal :open="isOpen" class="import-export">
      <template v-slot:modalHeader>
        <img src="/img/aaj/logo.png" class="logo" />
        <button type="button" class="close" @click="close">×</button>
      </template>

      <template v-slot:default>
        <h3 class="text-center"></h3>
        <div class="place grid">
          <router-link
            :to="{ name: 'user.transaction' }"
            @click.prevent="shipmentType('import')"
            class="border-radius centralized"
            exact
          >
            IMPORT
          </router-link>
          <router-link
            :to="{ name: 'user.transaction' }"
            class="border-radius centralized"
            @click.prevent="shipmentType('export')"
            exact
          >
            EXPORT
          </router-link>
        </div>
      </template>

      <template v-slot:modalFooter>
        <button type="button" class="btn bg-blue" @click="close">Close</button>
      </template>
    </Modal>

    <div class="customer-header">
      <div class="container">
        <div class="avatar">
          <div class="flex">
            <h5 class="h5">{{ greetings }}</h5>
            <h4 class="h4" v-if="user">{{ fullName }}</h4>
          </div>
        </div>

        <div class="account container">
          <div class="card">
            <div class="grid grid-3 header-item">
              <div class="">
                <span>%10</span>
                <p>Discount</p>
              </div>
              <div class="">
                <span>250</span>
                <p>Bonuses</p>
              </div>
              <div>
                <router-link :to="{ name: 'user.wallet' }" class="text-primary">
                  <span>{{
                    new Intl.NumberFormat().format(wallet.balance)
                  }}</span>
                  <p>Deposit</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="customer-content container">
      <div class="grid grid-3 content-item">
        <div class="card">
          <router-link :to="{ name: 'user.rate' }" exact>
            <div class="card-img">
              <img src="/img/aaj/rate.svg" alt="Rate" />
            </div>
            <div class="flex card-info">
              <h5>Get rates</h5>
            </div>
          </router-link>
        </div>
        <div class="card fund">
          <router-link :to="{ name: 'user.wallet' }" exact>
            <div class="card-img">
              <img src="/img/aaj/wallet.svg" alt="Fund Wallet" />
            </div>
            <div class="flex card-info">
              <h5>Wallet</h5>
            </div>
          </router-link>
        </div>

        <div class="card">
          <div @click="opneModal">
            <div class="card-img">
              <img src="/img/aaj/request.svg" alt="Request Shipment" />
            </div>
            <div class="flex card-info">
              <h5>Shipment type</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import Modal from "@/components/ModalComp.vue";

export default {
  name: "Dashboard",

  components: { Modal },

  data() {
    return {
      greetings: "",
      foramtted: "",
      isOpen: false,
    };
  },

  computed: {
    ...mapGetters({
      user: "auth/user",
      wallet: "wallet/wallets",
    }),

    fullName: function () {
      return this.user.first_name + " " + this.user.last_name;
    },
  },

  methods: {
    ...mapActions("location", ["getShipmentType"]),
    ...mapActions("wallet", ["getWallet"]),

    shipmentType: function (params) {
      this.getShipmentType(params);
    },

    getDate: function () {
      const todaysDate = new Date();
      this.foramtted = moment(todaysDate).format("MMM Do, YYYY. (h:mm a)");

      const hrs = todaysDate.getHours();
      let greet;

      if (hrs < 12) greet = "Good Morning";
      else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
      else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
      this.greetings = greet;
    },

    opneModal: function () {
      this.isOpen = !this.isOpen;
    },
    close: function () {
      this.isOpen = !this.isOpen;
    },
  },

  created() {
    setInterval(this.getDate, 1000);
  },

  mounted() {
    this.getWallet(this.user.id);
  },
};
</script>

<style scoped>
.place.grid {
  place-items: center;
}
.border-radius {
  border-radius: 50% / 25%;
  width: 100px;
  height: 100px;
  background-color: var(--aaj-primary-h1);
}
.centralized {
  display: grid;
  place-items: center;
}
.centralized {
  color: aliceblue;
}
.logo {
  width: 50px;
  display: block;
}
.modal h3 {
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
}
.modal h5 {
  font-size: 1rem;
  color: var(--aaj-blue-h1);
}
.avatar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.avatar .flex {
  flex-direction: column;
  align-items: flex-start;
}
.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
}
.customer-header {
  position: relative;
  height: 30vh;
  background: var(--aaj-gray-darkest);
  border-radius: 0 0 50% 50%;
}
.account {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
}
.account .card {
  width: 95%;
  margin: 10px auto;
}
.grid {
  gap: 0;
  text-align: center;
  color: var(--aaj-primary-h);
}
.header-item {
  padding: 2rem;
}
.header-item > div:not(:nth-last-of-type(1)) {
  border-right: 1px double var(--aaj-primary-h10);
}
.header-item > div {
  padding: 0 1rem;
}
.header-item span {
  font-size: 1.6rem;
  font-weight: 700;
}
.header-item p {
  color: var(--aaj-primary-h10);
}
.text-primary {
  color: var(--aaj-primary-h1);
}
.customer-content {
  padding: 0 1rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.content-item {
  text-transform: uppercase;
}
.content-item .card {
  min-height: 130px;
  padding: 0;
}
.content-item .card-info {
  height: 50px;
}
.content-item .card h5 {
  font-size: 0.8rem !important;
  font-weight: 700;
}
:where(.h5, .h4) {
  font-size: 1rem !important;
}
.card-img img {
  width: 105px;
  max-height: 60px;
  display: block;
  background-color: var(--aaj-primary-h10);
  margin-bottom: 0.5rem;
  border-radius: 10px 10px 0 0;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .customer-content .card {
    margin: 5px;
  }
  .card-img img {
    width: 95px;
  }
}

@media (min-width: 360px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .customer-content .card {
    margin: 8px;
  }
  .card-img img {
    width: 105px;
  }
}

@media (min-width: 375px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .customer-content .card {
    margin: 8px;
  }
  .card-img img {
    width: 105px;
  }
}

@media (min-width: 411px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .customer-content .card {
    margin: 8px;
  }
  .card-img img {
    width: 120px;
  }
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
  .card-img img {
    width: 100%;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .account .card {
    padding: 1.2rem 0;
  }
  .customer-header {
    position: relative;
    height: 20vh;
    background: var(--aaj-gray-darkest);
    border-radius: 0;
  }
  .header-item > div {
    padding: 0 5.5rem;
  }
  .header-item span {
    font-size: 1.8rem;
  }
  .header-item p {
    font-size: 1.2rem;
  }
  .avatar {
    padding-left: 1rem;
  }
  .customer-content {
    padding: 0 0.5rem;
    margin-top: 5.5rem;
    margin-bottom: 6rem;
  }
  .content-item .card {
    min-height: 130px;
    margin: 1rem;
  }
  .content-item .card-info {
    height: 80px;
  }
  .content-item .card h5 {
    font-size: 1rem;
  }
  .card-img img {
    width: 100%;
    max-height: 100px;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .avatar {
    padding: 2rem 2rem 0 1rem;
  }
  .account .card {
    padding: 2rem 0;
  }
  .customer-header {
    height: 40vh;
  }
}

@media (min-width: 1025px) {
  .account .card {
    width: 100%;
  }
  .customer-header {
    height: 40vh;
  }

  .content-item .card {
    min-height: 150px;
    margin-left: 0;
    margin-right: 0;
  }
  .content-item .card:not(:nth-last-of-type(1)) {
    margin-right: 1.5rem;
  }
  .fund {
    margin-right: 0 !important;
    color: var(aaj-primary-h1) !important;
  }
}

@media (min-width: 1280px) {
  /* hi-res laptops and desktops */
  .customer-header {
    height: 30vh;
  }
  .fund {
    margin-right: 1.5rem !important;
  }
  .content-item .card h5 {
    font-size: 1rem !important;
  }
  .avatar {
    padding-left: 0;
  }
  :where(.h5, .h4) {
    font-size: 1.25rem !important;
  }
  .account {
    top: 50%;
  }

  .customer-content {
    margin-top: 8rem;
  }
}
</style>
