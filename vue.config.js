module.exports = {
  pwa: {
    name: "AAJ-Express",
    shortName: "AAJ",
    startURL: "index.html",
    themeColor: "#DA532C",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: { swSrc: "src/service-worker.js" },
  },
};
