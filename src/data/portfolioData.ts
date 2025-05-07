
import { PortfolioItem, PropItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Set Design - The Journey Within",
    category: "web-series",
    categoryLabel: "Web Series",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "Behind-the-scenes capture from the set.",
    client: "Dreamscape Media",
    year: 2023
  },
  {
    id: 2,
    title: "Live Performance Setup",
    category: "music-videos",
    categoryLabel: "Music Video",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Lighting setup for a live performance shoot.",
    client: "Electric Pulse Records",
    year: 2022
  },
  {
    id: 3,
    title: "Vintage Collection",
    category: "brand-ads",
    categoryLabel: "Brand Advertisement",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Styling vintage props for a luxury brand.",
    client: "Heritage Luxe",
    year: 2023
  },
  {
    id: 4,
    title: "Tech Scene",
    category: "web-series",
    categoryLabel: "Web Series",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Set design for a tech-focused episode.",
    client: "NextGen Studios",
    year: 2021
  },
  {
    id: 5,
    title: "Stage Setup",
    category: "music-videos",
    categoryLabel: "Music Video",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Quick capture during music video preparation.",
    client: "Sonora Records",
    year: 2022
  },
  {
    id: 6,
    title: "Minimalist Set Design",
    category: "brand-ads",
    categoryLabel: "Brand Advertisement",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Simple, clean aesthetic for eco-brand.",
    client: "GreenLife",
    year: 2023
  }
];

export const propItems: PropItem[] = [
  {
    id: 1,
    name: "Vintage Camera Collection",
    category: "Photography Equipment",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Assorted vintage cameras, perfect for period pieces.",
    pricePerDay: 150,
    available: true
  },
  {
    id: 2,
    name: "Mid-Century Furniture",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Authentic mid-century furniture pieces.",
    pricePerDay: 300,
    available: true
  },
  {
    id: 3,
    name: "Studio Lights",
    category: "Lighting Equipment",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Professional lighting equipment.",
    pricePerDay: 200,
    available: true
  },
  {
    id: 4,
    name: "Retro Electronics",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Vintage electronics for set design.",
    pricePerDay: 120,
    available: false
  }
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
    alt: "Behind the scenes - Forest shoot",
    category: "Web Series"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Location scouting",
    category: "Music Video"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    alt: "Urban architecture shoot",
    category: "Brand Ad"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    alt: "Building perspectives",
    category: "Web Series"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    alt: "Urban exploration",
    category: "Music Video"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    alt: "Natural light shoot",
    category: "Brand Ad"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    alt: "Exterior set design",
    category: "Web Series"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e",
    alt: "Night scene setup",
    category: "Music Video"
  }
];
