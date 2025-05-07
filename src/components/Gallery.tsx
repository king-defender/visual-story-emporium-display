
import React, { useState } from 'react';
import { galleryImages } from '../data/portfolioData';
import { AspectRatio } from './ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(galleryImages.map(image => image.category))];
  
  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <section id="gallery" className="section bg-muted">
      <div className="container px-4">
        <h2 className="section-title">Random Captures</h2>
        <p className="text-lg mb-10 max-w-3xl">
          Candid moments and spontaneous shots from various projects and locations.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"} 
              size="sm"
              className={activeCategory === category ? "bg-gold hover:bg-gold-dark" : ""} 
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All' : category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className={cn(
                "overflow-hidden rounded-lg group",
                (filteredImages.length >= 5 && (index === 3 || index === 4)) ? "sm:col-span-2" : ""
              )}
            >
              <AspectRatio ratio={(filteredImages.length >= 5 && (index === 3 || index === 4)) ? 16/9 : 1/1}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
                  <div className="text-white">
                    <div className="text-xs font-medium tracking-wider">{image.category}</div>
                    <div className="text-sm">{image.alt}</div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
