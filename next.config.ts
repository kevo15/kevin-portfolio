import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep links shared before the redesign working.
  async redirects() {
    return [
      { source: "/caseStudies", destination: "/projects", permanent: true },
      { source: "/caseStudies/:id", destination: "/projects/:id", permanent: true },
      { source: "/projects/project", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
