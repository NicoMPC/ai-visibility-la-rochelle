const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPagesBuild && {
    output: "export",
    basePath: "/ai-visibility-la-rochelle",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
