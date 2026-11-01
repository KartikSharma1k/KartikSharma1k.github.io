/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // static site -> deployable to GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
  transpilePackages: ["three"],
};
export default nextConfig;
