
export interface PortfolioItem {
  id: number;
  title: string;
  category: 'web-series' | 'music-videos' | 'brand-ads';
  categoryLabel: string;
  image: string;
  description: string;
  client?: string;
  year: number;
}

export interface PropItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  pricePerDay?: number;
  available: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}
