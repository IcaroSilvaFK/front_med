/** @type {import('next').NextConfig} */
import path from "node:path";

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(".", "src", "styles")],
  },
};

export default nextConfig;
