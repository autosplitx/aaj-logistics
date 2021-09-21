module.exports = {
  pwa: {
    name: "AAJ-Express",
    short_name: "AAJ",
    start_url: "/index.html",
    themeColor: "#DA532C",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestPath: "manifest.json",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      exclude: [/\.map$/, /_redirects/],
    },
  },
};
