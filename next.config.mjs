/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.500fd.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
