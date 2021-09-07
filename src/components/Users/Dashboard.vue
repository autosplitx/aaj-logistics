<template>
  <div class="customer">
    <div class="customer-header">
      <div class="container">
        <div class="avatar">
          <div class="flex">
            <h5>{{ greetings }}</h5>
            <h4>{{ userName }}</h4>
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
              <div class="">
                <span>544</span>
                <p>Deposit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="customer-content container">
      <div class="grid grid-3 content-item">
        <div class="card">
          <router-link :to="{ name: 'user.requestpayment' }">
            <div class="card-img">
              <img src="/img/aaj/send.svg" alt="Request Payment" />
            </div>
            <div class="flex card-info">
              <h5>Send or request payment</h5>
            </div>
          </router-link>
        </div>
        <div class="card">
          <router-link :to="{ name: 'user.dashboard' }">
            <div class="card-img">
              <img src="/img/aaj/rate.svg" alt="Rate" />
            </div>
            <div class="flex card-info">
              <h5>Get rates</h5>
            </div>
          </router-link>
        </div>
        <div class="card fund">
          <router-link :to="{ name: 'user.dashboard' }">
            <div class="card-img">
              <img src="/img/aaj/wallet.svg" alt="Fund Wallet" />
            </div>
            <div class="flex card-info">
              <h5>fund wallet</h5>
            </div>
          </router-link>
        </div>

        <div class="card">
          <router-link :to="{ name: 'user.dashboard' }">
            <div class="card-img">
              <img src="/img/aaj/request.svg" alt="Request Shipment" />
            </div>
            <div class="flex card-info">
              <h5>Request shipment</h5>
            </div>
          </router-link>
        </div>
        <div class="card">
          <router-link :to="{ name: 'user.dashboard' }">
            <div class="card-img">
              <img src="/img/aaj/track.svg" alt="Track Shipment" />
            </div>
            <div class="flex card-info">
              <h5>Track shipment</h5>
            </div>
          </router-link>
        </div>
        <div class="card">
          <router-link :to="{ name: 'user.dashboard' }">
            <div class="card-img">
              <img src="/img/aaj/invite.svg" alt="Invitation" />
            </div>
            <div class="flex card-info">
              <h5>Invite &amp; earn</h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Dashboard",

  data() {
    return {
      greetings: "",
      foramtted: "",
      userName: "Aderibipe Ashabi",
    };
  },

  methods: {
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
  },

  created() {
    setInterval(this.getDate, 1000);
  },
};
</script>

<style scoped>
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
.customer-content {
  padding: 0 1rem;
  margin-top: 5rem;
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
  font-size: 0.8rem;
  font-weight: 700;
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
    border-radius: 0 0 50% 50%;
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

  .customer-content {
    padding: 0 0.5rem;
    margin-top: 5.5rem;
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
}

@media (min-width: 1025px) {
  .account .card {
    width: 100%;
  }
  .customer-header {
    height: 30vh;
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
  }
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
