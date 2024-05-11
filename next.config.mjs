/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dribbble.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
