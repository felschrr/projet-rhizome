/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {},
    devIndicators: {
        appIsrStatus: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
