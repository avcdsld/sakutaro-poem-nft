module.exports = {
  style: {
    // why use postcssOptions? -> https://github.com/dilanx/craco/issues/353
    postcssOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: {
      resolve: {
        fallback: { "stream": require.resolve("stream-browserify") }
      },
      ignoreWarnings: [
        /Failed to parse source map/,
        /source-map-loader/,
        /Module Warning/,
        /ENOENT.*\.ts$/,
        /ENOENT.*\.js\.map$/,
        /@ethersproject/,
        /@scure\/bip39/,
        /superstruct/,
      ]
    },
  },
};
