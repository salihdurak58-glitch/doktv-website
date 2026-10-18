import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/schaufenster-display-apotheken", destination: "/apotheken", permanent: true },
      // Consolidate the short legacy article into the established, detailed guide.
      { source: "/blog/digital-signage-apotheken", destination: "/blog/digital-signage-apotheke", permanent: true },
    ];
  },
};

export default nextConfig;
