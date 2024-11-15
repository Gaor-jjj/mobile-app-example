module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            app: "./app",
            components: "./components",
            assets: "./assets",
            data: "./data",
            lib: "./lib",
            context: "./context",
            constants: "./constants"
          },
        },
      ],
    ],
  };
};
