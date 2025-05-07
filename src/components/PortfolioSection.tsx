
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { PortfolioItem } from '../types/portfolio';
import { portfolioItems } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

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
          Explore a curated collection of creative work spanning web series, music videos, and brand advertisements, 
          showcasing expertise in visual storytelling and art direction.
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
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-gold uppercase tracking-wider">{item.categoryLabel}</span>
                <h3 className="text-xl font-medium mt-1">{item.title}</h3>
              </div>
              <span className="bg-muted px-2 py-1 rounded text-sm">{item.year}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{item.description}</p>
            <div className="mt-4 flex items-center">
              <span className="text-xs text-muted-foreground">{item.client}</span>
              <a href="#" className="ml-auto text-gold hover:text-gold-dark flex items-center gap-1 text-sm">
                View Project 
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioSection;
