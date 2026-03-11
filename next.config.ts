import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tells Next.js to build static HTML/CSS/JS files
  output: "export",
  
  // GitHub Pages doesn't support Next.js's built-in image optimization server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
