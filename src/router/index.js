import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration.vue";

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
  // {
  //   path: "/registration",
  //   name: "Registration",
  //   component: () =>
  //     import(/* webpackChunkName: "registration" */ "../views/Registration.vue"),
  //   meta: {
  //     title: "Registration | AAJExpress",
  //     metaTags: [
  //       {
  //         name: "description",
  //         content: "The registration page of AAJExpress.",
  //       },
  //       {
  //         property: "og:description",
  //         content: "The registration page of AAJExpress.",
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: "/signup",
  //   name: "Signup",
  //   component: () =>
  //     import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  //   meta: {
  //     title: "Signup | AAJExpress",
  //     metaTags: [
  //       {
  //         name: "description",
  //         content: "The signup page of AAJExpress.",
  //       },
  //       {
  //         property: "og:description",
  //         content: "The signup page of AAJExpress.",
  //       },
  //     ],
  //   },
  // },
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
