
import React from 'react';
import { propItems } from '../data/portfolioData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tag, ShoppingCart } from 'lucide-react';

const PropRentalSection: React.FC = () => {
  return (
    <section id="props" className="section bg-muted">
      <div className="container px-4">
        <h2 className="section-title">Prop Rental</h2>
        <p className="text-lg mb-10 max-w-3xl">
          Elevate your production with our specialized prop rental service. We offer an extensive collection of 
          unique items, from vintage furniture to specialized equipment, tailored to your creative needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propItems.map(prop => (
            <Card key={prop.id} className="h-full flex flex-col">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{prop.name}</CardTitle>
                  <Badge variant={prop.available ? "default" : "secondary"}>
                    {prop.available ? "Available" : "Booked"}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Tag size={14} />
                  {prop.category}
                </CardDescription>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center">
                {prop.pricePerDay && (
                  <p className="font-medium">${prop.pricePerDay}<span className="text-xs text-muted-foreground"> / day</span></p>
                )}
                <Button 
                  variant={prop.available ? "default" : "secondary"} 
                  size="sm" 
                  className={prop.available ? "bg-gold hover:bg-gold-dark" : ""}
                  disabled={!prop.available}
                >
                  <ShoppingCart size={16} className="mr-2" />
                  {prop.available ? "Rent Now" : "Unavailable"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6">Need something specific for your production? Contact us for custom prop solutions.</p>
          <Button className="bg-gold hover:bg-gold-dark">
            View All Props
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropRentalSection;
