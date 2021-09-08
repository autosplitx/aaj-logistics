import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";
import User from "../views/User.vue";
import Dashboard from "../components/Users/Dashboard.vue";
import RequestPayment from "../components/Users/CustomersActivities/RequestPayment.vue";
import Rate from "../components/Users/CustomersActivities/Rate.vue";
import Wallet from "../components/Users/CustomersActivities/Wallet.vue";
import TopUpWallet from "../components/Users/CustomersActivities/TopUpWallet.vue";

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
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../components/Auth/ForgotPassword.vue"
      ),
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
    meta: {
      title: "User - AAJExpress",
      metaTags: [
        {
          name: "description",
          content: "The user's page of AAJExpress.",
        },
        {
          property: "og:description",
          content: "The user's page of AAJExpress.",
        },
      ],
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
      // {
      //   path: "products",
      //   component: Products,
      //   children: [
      //     {
      //       path: "",
      //       name: "admin.products",
      //       component: ProductTable,
      //       meta: {
      //         title: "Admin | Products - AAJExpress",
      //       },
      //     },
      //     {
      //       path: "images",
      //       name: "products.images",
      //       component: ProductImages,
      //       meta: {
      //         title: "Admin | Product Images - AAJExpress",
      //       },
      //     },
      //     {
      //       path: "tags",
      //       name: "products.tags",
      //       component: Tags,
      //       meta: {
      //         title: "Admin | Product Tags - AAJExpress",
      //       },
      //     },
      //   ],
      // },
    ],
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
