/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require("next-images");
const withTMm = require("next-transpile-modules")(["@madzadev/image-slider","react-slick"]);

module.exports = withImages(withTMm());

module.exports = nextConfig
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};