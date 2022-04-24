/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // disableStaticImages: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
