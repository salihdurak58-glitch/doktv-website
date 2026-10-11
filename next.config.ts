import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/schaufenster-display-apotheken", destination: "/apotheken", permanent: true }];
  },
};

export default nextConfig;
