//all pasted in to make webpack work smagic and gsap
//also had to npm install imports loader

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
    "ScrollMagicGSAP": "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
  }
},
module: {
  rules: [
    {
      test: /\.js$/,
      loader: "imports-loader?define=>false"
    },
  ],
},
  }
}
