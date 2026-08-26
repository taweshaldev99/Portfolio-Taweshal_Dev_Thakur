/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static HTML export — no Node server needed.
  // `next build` writes the deployable site to ./out
  output: "export",

  // next/image optimization requires a server; static export uses plain <img>.
  images: { unoptimized: true },

  // Fail the build on type errors rather than shipping broken code.
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
