module.exports = {
  // https://github.com/angular/angular-cli/issues/1548
  node: {
    vm: true,
    stream: true,
    fs: 'empty'
  },
  resolve: {
    alias: {
      crypto: "crypto-browserify",
    },
  },
};
