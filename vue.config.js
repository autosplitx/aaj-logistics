module.exports = {
  pwa: {
    name: "AAJ-Express",
    short_name: "AAJ",
    start_url: "/index.html",
    themeColor: "#DA532C",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      // exclude: [/_redirects/],
    },
    dest: "public/static",
  },
};
