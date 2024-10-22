import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com"],
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "product-overview",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./ProductOverview": "./src/components/ProductOverview.tsx",
        },
        shared: ["react", "react-dom"],
      })
    );

    return config;
  },
};

export default nextConfig;
