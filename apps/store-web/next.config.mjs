/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['chaochao-bucket.s3-ap-southeast-2.amazonaws.com'],
  },
  transpilePackages: ['@gqty/react', 'gqty'],
}

export default nextConfig
