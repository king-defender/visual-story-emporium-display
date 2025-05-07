
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { PortfolioItem } from '../types/portfolio';
import { portfolioItems } from '../data/portfolioData';
import { ExternalLink, Image } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-background">
      <div className="container px-4">
        <h2 className="section-title">Portfolio</h2>
        <p className="text-lg mb-10 max-w-3xl">
          A collection of visual works - casual captures from various projects.
        </p>
        
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full md:w-auto grid-cols-4 mb-12">
            <TabsTrigger value="all" onClick={() => setActiveCategory('all')}>All Work</TabsTrigger>
            <TabsTrigger value="web-series" onClick={() => setActiveCategory('web-series')}>Web Series</TabsTrigger>
            <TabsTrigger value="music-videos" onClick={() => setActiveCategory('music-videos')}>Music Videos</TabsTrigger>
            <TabsTrigger value="brand-ads" onClick={() => setActiveCategory('brand-ads')}>Brand Ads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="web-series" className="mt-0">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="music-videos" className="mt-0">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
          <TabsContent value="brand-ads" className="mt-0">
            <PortfolioGrid items={filteredItems} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const PortfolioGrid: React.FC<{ items: PortfolioItem[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map(item => (
        <div key={item.id} className="portfolio-item group">
          <div className="overflow-hidden rounded-lg">
            <AspectRatio ratio={4/3} className="bg-muted">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </AspectRatio>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <span className="text-xs text-gold uppercase tracking-wider">{item.categoryLabel}</span>
              <span className="bg-muted px-2 py-1 rounded text-sm">{item.year}</span>
            </div>
            <h3 className="text-xl font-medium mt-1">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
