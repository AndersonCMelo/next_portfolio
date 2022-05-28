/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'imgix',
    // path: 'https://andersonmelo.imgix.net',
    domains: ['i.imgur.com'],
  },
}

module.exports = nextConfig
