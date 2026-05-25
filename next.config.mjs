/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Flat ESLint config + eslint-config-next can fail on Vercel's build step
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
