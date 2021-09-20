<template>
  <div class="wallet-container">
    <div class="container">
      <div class="balance">
        <div class="wallet-number">
          <h4>Wallet Number</h4>
          <template v-if="wallet">
            <h5>{{ wallet.ref_no }}</h5>
          </template>
          <template v-else>
            <h5>--- ---</h5>
          </template>
        </div>
        <div class="wallet-balance">
          <h4>Wallet Balance</h4>
          <h5>{{ new Intl.NumberFormat().format(wallet.balance) }}</h5>
        </div>
      </div>

      <div class="grid grid-3 my-2">
        <div class="">
          <!-- <div class="send">
            <img src="/img/aaj/send1.svg" alt="Send" />
            <h5>Send</h5>
          </div> -->
        </div>

        <div class="card">
          <router-link :to="{ name: 'user.topupwallet' }">
            <div class="top-up">
              <img src="/img/aaj/topup.svg" alt="Top up" />
              <h5>Top Up</h5>
            </div>
          </router-link>
        </div>

        <div class="">
          <!-- <div class="pay">
            <img src="/img/aaj/pay.svg" alt="Pay" />
            <h5>Pay</h5>
          </div> -->
        </div>
      </div>

      <div class="wallet-wrap">
        <div class="wallets">
          <div class="see-all">
            <h3>Last Transactions</h3>
            <a href="#">See all</a>
          </div>

          <div class="card" v-for="transact in transactions" :key="transact.id">
            <h6>{{ formatDate(transact.created_at) }}</h6>
            <div class="accountDetails">
              <!-- <h5 class="info">Info</h5> -->
              <p><em>Waybill No:</em> {{ transact.waybill_no }}</p>
              <h5 class="subtract" @click="close(transact.waybill_no)">
                {{ new Intl.NumberFormat().format(transact.price) }}
              </h5>
            </div>
            <!-- <p>
              <em>Manifest No:</em>
              <samp class="add">{{ transact.manifest_no }}</samp>
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <Modal :open="isOpen">
      <template v-slot:modalHeader>
        <img src="/img/aaj/logo.png" class="logo" />
        <button type="button" class="close" @click="close">×</button>
      </template>

      <template v-slot:default v-if="transaction != null">
        <h4 class="text-center">Transaction Details</h4>
        <table
          class="
            table table-borderless table-striped table-hover table-responsive-sm
          "
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Weight</th>
              <th>Cost</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="detail in transaction" :key="detail.id">
              <td>{{ detail.description }}</td>
              <td>{{ detail.quantity }}</td>
              <td>{{ detail.weight }}</td>
              <td>
                {{ new Intl.NumberFormat().format(detail.declared_total_cost) }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template v-slot:modalFooter>
        <button type="button" class="btn bg-blue" @click="close">Close</button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "../../ModalComp.vue";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  name: "Wallet",
  components: { Modal },

  data() {
    return {
      v$: useVuelidate(),

      form: {
        userdetail: "",
        country: "",
        amount: "",
      },

      isOpen: false,
    };
  },

  computed: {
    ...mapGetters({
      transactions: "transaction/transactions",
      transaction: "transaction/transaction",
      user: "auth/user",
      wallet: "wallet/wallets",
    }),
  },

  methods: {
    ...mapActions("transaction", ["getTransactions", "getSingleTransaction"]),
    ...mapActions("wallet", ["getWallet"]),

    submitRequest() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      } else {
        // alert("Please fill out all the required field..!");
      }
    },

    submitSend() {
      this.v$.$validate();
      // console.log("This is working", this.v$);
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      } else {
        // alert("Please fill out all the required field..!");
      }
    },

    formatDate: function (params) {
      return moment(params).format("MMM. Do, YYYY");
    },

    close: function (waybill) {
      this.isOpen = !this.isOpen;
      if (waybill != "") {
        this.getSingleTransaction(waybill);
      }
    },
  },

  mounted() {
    this.getTransactions(this.user.id);
    this.getWallet(this.user.id);
  },

  validations() {
    return {
      form: {
        userdetail: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
        country: {
          required: helpers.withMessage(
            "Country field cannot be empty",
            required
          ),
        },
        amount: {
          required: helpers.withMessage(
            "Amount field cannot be empty",
            required
          ),
        },
      },
    };
  },
};
</script>

<style scoped>
.trans {
  margin: 1rem 0;
}
.logo {
  width: 60px;
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

.add {
  color: var(--aaj-add);
}
.subtract {
  color: var(--aaj-subtract);
}
.subtract:hover {
  font-weight: 700;
  cursor: pointer;
}
.wallet-container {
  /* height: 43vh; */
  margin-bottom: 5rem;
  background-color: var(--aaj-primary-h1);
}
.balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
}
.wallet-number :where(h4, h5) {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}
.wallet-balance :where(h4, h5) {
  color: #fff;
  text-align: right;
  font-weight: 500;
  font-size: 1rem;
}
.grid.grid-3 h5 {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}
.grid.grid-3 img {
  width: 100%;
  display: block;
  max-height: 40px;
}
.wallet-wrap {
  width: 100%;
  padding: 2rem 1rem 1rem;
  background-color: #fff;
  border-radius: 50px 50px 0 0;
}
.accountDetails {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}
.wallets .card {
  margin: 1rem 0 0;
}
.wallets .info {
  color: var(--aaj-blue-h1);
}
.wallet-wrap h3 {
  margin: 0 0 0.8rem;
  color: var(--aaj-primary-h);
  font-size: 1rem;
  font-weight: 600;
}
.wallet-wrap h6 {
  color: var(--aaj-gray-dark);
  font-weight: 500;
}
.see-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.see-all a {
  display: block;
  font-weight: 600;
  color: var(--aaj-primary-h10);
}
.wallet-wrap p {
  color: var(--aaj-gray-dark);
  font-size: 0.8rem;
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .grid.grid-3 h5 {
    font-size: 0.8rem;
  }
  .wallet-container {
    /* max-height: 100vh; */
    margin-bottom: 5rem;
  }
}
@media (min-width: 375px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .wallet-container {
    max-height: 35vh;
  }
}

@media (min-width: 411px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .trans {
    width: 60%;
  }
  .wallet-container {
    max-height: 34vh;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .trans {
    width: 40%;
  }
  .wallet-container {
    max-height: 30vh;
  }
  .balance {
    padding: 0 1rem;
  }
  .wallet-number :where(h4, h5) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .wallet-balance :where(h4, h5) {
    font-size: 1.5rem;
  }
  .grid.grid-3 {
    padding: 0 0.8rem;
  }
  .grid.grid-3 h5 {
    font-size: 1.5rem;
  }
  .grid.grid-3 img {
    max-height: 60px;
  }
  .wallet-wrap {
    width: 100%;
    padding: 3rem 1.5rem 1.5rem;
  }
  .wallets .card {
    margin: 1.5rem 0 0;
  }
  .wallets .card h5 {
    font-size: 1rem;
  }

  .wallets .card :where(h6, p) {
    font-size: 1rem;
  }
  .wallet-wrap h3 {
    font-size: 1.5rem;
  }
  .see-all a {
    font-size: 1.5rem;
  }
  .wallet-wrap p {
    font-size: 1rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .wallet-container {
    max-height: 28vh;
  }
}

@media (min-width: 1025px) {
  .trans {
    width: 30%;
  }
  .wallet-container {
    height: 25vh;
  }
  .balance {
    padding: 0 1.5rem;
  }
  .grid.grid-3 img {
    min-height: 50px;
  }
  .wallet-wrap {
    padding: 1rem 1rem 1rem;
    border-radius: 0;
  }
  .wallet-wrap h3 {
    font-size: 1rem;
  }
  .see-all a {
    font-size: 1rem;
  }
  .wallet-wrap p {
    font-size: 1rem;
  }
}
</style>
