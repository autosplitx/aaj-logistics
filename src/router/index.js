/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const Registration = () =>
  import(/* webpackChunkName: "registration" */ "@/views/Registration.vue");
const Transaction = () =>
  import(/* webpackChunkName: "transaction" */ "@/views/Transaction");
const User = () => import(/* webpackChunkName: "user" */ "@/views/User.vue");
const Dashboard = () =>
  import(
    /* webpackChunkName: "dashboard" */ "@/components/Users/Dashboard.vue"
  );
const RequestPayment = () =>
  import(
    /* webpackChunkName: "request-payment" */ "@/components/Users/CustomersActivities/RequestPayment.vue"
  );
const Rate = () =>
  import(
    /* webpackChunkName: "rate" */ "@/components/Users/CustomersActivities/Rate.vue"
  );
const Wallet = () =>
  import(
    /* webpackChunkName: "wallet" */ "@/components/Users/CustomersActivities/Wallet.vue"
  );
const TopUpWallet = () =>
  import(
    /* webpackChunkName: "top-up-wallet" */ "@/components/Users/CustomersActivities/TopUpWallet.vue"
  );
const ForgotPassword = () =>
  import(
    /* webpackChunkName: "forgot-password" */ "@/components/Auth/ForgotPassword.vue"
  );
const Profile = () =>
  import(
    /* webpackChunkName: "profile" */ "@/components/Users/Profile.vue"
  );

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home | AAJExpress",
      metaTags: [
        {
          name: "description",
          content: "The home page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The home page of AAJExpress.",
        },
      ],
      progress: {
        func: [
          { call: "color", modifier: "temp", argument: "#86c228ff" },
          { call: "fail", modifier: "temp", argument: "#6e0000" },
          { call: "location", modifier: "temp", argument: "top" },
          {
            call: "transition",
            modifier: "temp",
            argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
          },
        ],
      },
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
    meta: {
      // guestAuth: true,
      title: "Registration | AAJExpress",
      metaTags: [
        {
          name: "description",
          content: "The registration page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The registration page of AAJExpress.",
        },
      ],
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Reset Password | AAJExpress",
      metaTags: [
        {
          name: "description",
          content: "The reset password page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The reset password page of AAJExpress.",
        },
      ],
    },
  },
  {
    path: "/user",
    component: User,
    async beforeEnter(to, from, next) {
      try {
        let hasPermission = await store.getters["auth/authenticated"];
        if (hasPermission) {
          next();
        } else {
          next({
            name: "Registration",
            query: { redirectFrom: to.fullPath },
          });
        }
      } catch (error) {
        next({
          name: "Registration",
          query: { redirectFrom: to.fullPath },
        });
      }
    },
    meta: {
      title: "User - AAJExpress",
    },
    children: [
      {
        path: "",
        name: "user.dashboard",
        component: Dashboard,
        meta: {
          title: "User | Dashboard - AAJExpress",
        },
      },
      {
        path: "requestpayment",
        name: "user.requestpayment",
        component: RequestPayment,
        meta: {
          title: "Request Payment | AAJExpress",
          metaTags: [
            {
              name: "description",
              content: "The request payment's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The request payment's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "transaction",
        name: "user.transaction",
        component: Transaction,
        meta: {
          title: "Transaction | AAJExpress",
          metaTags: [
            {
              name: "description",
              content: "The transaction's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The transaction's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "rate",
        name: "user.rate",
        component: Rate,
        meta: {
          title: "Rate | AAJExpress",
          metaTags: [
            {
              name: "description",
              content: "The rate's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The rate's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "wallet",
        name: "user.wallet",
        component: Wallet,
        meta: {
          title: "Wallet | AAJExpress",
          metaTags: [
            {
              name: "description",
              content: "The wallet's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The wallet's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "topupwallet",
        name: "user.topupwallet",
        component: TopUpWallet,
        meta: {
          title: "Top Up Wallet | AAJExpress",
          metaTags: [
            {
              name: "description",
              content: "The top up wallet's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The top up wallet's page of AAJExpress.",
            },
          ],
        },
      },
      {
        path: "profile",
        name: "user.profile",
        component: Profile,
        meta: {
          title: "Profile | AAJExpress",
          metaTags: [
            {
              name: "description",
              content: "The profile's page of AAJExpress.",
            },
            {
              property: "og:description",
              content: "The profile's page of AAJExpress.",
            },
          ],
        },
      },
    ],
  },

  {
    path: "/:catchAll(.*)",
    component: () => import("../components/NotFound.vue"),
    meta: {
      title: "Error 404 | AAJExpress",
      metaTags: [
        {
          name: "description",
          content: "The error 404 page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The error 404 page of AAJExpress.",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition || to.hash) {
      return {
        savedPosition,
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  // function isLoggedIn() {
  //   let authUser = store.getters["auth/authenticated"];
  //   return authUser;
  // }

  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   if (!isLoggedIn()) {
  //     next({
  //       name: "Registration",
  //       query: { redirect: from.fullPath },
  //     });
  //   }
  // } else if (to.matched.some((record) => record.meta.guestAuth)) {
  //   if (isLoggedIn()) {
  //     next({
  //       name: "Home",
  //       query: { redirect: to.fullPath },
  //     });
  //   }
  // }

  /* ---------------------------------------------//? SEO Friendly META -------------------------------------------- */

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
