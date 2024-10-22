import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flowbite.com", "flowbite.s3.amazonaws.com"],
  },
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "home",
        remotes: {
          "product-overview": `product-overview@http://localhost:3002/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
      })
    );

    return config;
  },
};

export default nextConfig;
