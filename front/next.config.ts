import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,  // Add this line to ignore TypeScript errors during build
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'localhost' },
      { protocol: 'https', hostname: 'cdn-projects.gharpe.com' },
      { protocol: 'https', hostname: 'photos.zillowstatic.com' },
      { protocol: 'https', hostname: 's.oneroof.co.nz' },
      { protocol: 'https', hostname: 'cf.bstatic.com' },
      { protocol: 'https', hostname: 'draperandkramer.com' },
      { protocol: 'https', hostname: 'ered.gr' },
      { protocol: 'https', hostname: 'images1.apartments.com' },
      { protocol: 'https', hostname: 'rentpath-res.cloudinary.com' },
      { protocol: 'https', hostname: 'www.lendlease.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'www.radiancerealty.in' },
      { protocol: 'https', hostname: 'apxconstructiongroup.com' },
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 'media.self.com' },
      { protocol: 'https', hostname: 'www.uniondevelopers.com' },
      { protocol: 'https', hostname: 'www.torontorentals.com' },
    ],
  },
};

export default nextConfig;
