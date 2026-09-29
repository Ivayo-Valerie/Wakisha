'use client';

export default function customImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  // Return external URLs directly
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Prepend basePath for relative paths in GitHub Pages static export
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${basePath}${normalizedSrc}`;
}
