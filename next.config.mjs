/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.accessrichmond.org",
          },
          {
            protocol: "https",
            hostname: "user-images.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
          },
          {
            protocol: "https",
            hostname: "i.pravatar.cc",
          },
        ],
      },
    
};

export default nextConfig;
