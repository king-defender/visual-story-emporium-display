
import { PortfolioItem, PropItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "The Journey Within",
    category: "web-series",
    categoryLabel: "Web Series",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "A six-part psychological drama exploring the depths of human consciousness through surreal imagery and symbolic storytelling.",
    client: "Dreamscape Media",
    year: 2023
  },
  {
    id: 2,
    title: "Urban Rhythms",
    category: "music-videos",
    categoryLabel: "Music Video",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "A vibrant music video showcasing urban dance culture with dynamic visuals and high-energy choreography.",
    client: "Electric Pulse Records",
    year: 2022
  },
  {
    id: 3,
    title: "Timeless Elegance",
    category: "brand-ads",
    categoryLabel: "Brand Advertisement",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "A luxury brand campaign emphasizing heritage craftsmanship through meticulously designed vintage-inspired sets.",
    client: "Heritage Luxe",
    year: 2023
  },
  {
    id: 4,
    title: "Digital Frontiers",
    category: "web-series",
    categoryLabel: "Web Series",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "An episodic exploration of emerging technologies and their impact on society, featuring futuristic set designs.",
    client: "NextGen Studios",
    year: 2021
  },
  {
    id: 5,
    title: "Harmony",
    category: "music-videos",
    categoryLabel: "Music Video",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "An ambient music video with ethereal visuals that blend natural landscapes with abstract color compositions.",
    client: "Sonora Records",
    year: 2022
  },
  {
    id: 6,
    title: "Fresh Perspective",
    category: "brand-ads",
    categoryLabel: "Brand Advertisement",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "A minimalist campaign for an eco-friendly brand focusing on sustainability through clean aesthetics.",
    client: "GreenLife",
    year: 2023
  }
];

export const propItems: PropItem[] = [
  {
    id: 1,
    name: "Vintage Film Camera Collection",
    category: "Photography Equipment",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "A collection of fully functional vintage cameras from the 1950s-70s, perfect for period pieces.",
    pricePerDay: 150,
    available: true
  },
  {
    id: 2,
    name: "Mid-Century Modern Furniture Set",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Complete living room set in authentic mid-century modern design, includes sofa, coffee table, and accent chairs.",
    pricePerDay: 300,
    available: true
  },
  {
    id: 3,
    name: "Professional Studio Lighting Kit",
    category: "Lighting Equipment",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Comprehensive studio lighting setup with softboxes, LED panels, and stands for professional productions.",
    pricePerDay: 200,
    available: true
  },
  {
    id: 4,
    name: "Retro Electronics Collection",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Assorted vintage electronics including TVs, radios, and telephones from the 1960s-90s in working condition.",
    pricePerDay: 120,
    available: false
  }
];
