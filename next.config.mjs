/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// If deployed on GitHub Actions, detect repository subpath unless overridden or on custom domain
let repoBasePath = '';
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
  // If repository name is username.github.io, basePath is empty (root)
  if (!repoName.toLowerCase().endsWith('.github.io')) {
    repoBasePath = `/${repoName}`;
  }
}

// Support explicit override via BASE_PATH or NEXT_PUBLIC_BASE_PATH
const basePath = process.env.BASE_PATH ?? (process.env.NEXT_PUBLIC_BASE_PATH ?? repoBasePath);

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

