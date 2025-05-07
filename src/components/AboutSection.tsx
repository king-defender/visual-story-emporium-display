
import React from 'react';
import { Film, Music, Palette } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[3/4] bg-darkgray rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Art Director" 
                className="w-full h-full object-cover animate-image-zoom"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg shadow-lg">
              <p className="text-sm uppercase tracking-wider text-white">Over</p>
              <p className="text-4xl font-serif text-white">10 Years</p>
              <p className="text-sm text-white">of Creative Excellence</p>
            </div>
          </div>
          
          {/* Content side */}
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-6">
              I'm a passionate Art Director with expertise in crafting compelling visual narratives across multiple mediums. 
              My journey in the creative industry spans over a decade, during which I've collaborated with leading brands, 
              directors, and musicians to bring extraordinary visions to life.
            </p>
            <p className="mb-8">
              Whether designing intricate sets for web series, creating visual aesthetics for music videos, or developing 
              brand identity through advertisements, I approach each project with meticulous attention to detail and a 
              commitment to authentic storytelling.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted rounded-lg">
                <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Film className="text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Web Series</h3>
                <p className="text-sm text-muted-foreground">
                  Creating immersive visual worlds for episodic content that captivates audiences.
                </p>
              </div>
              
              <div className="p-6 bg-muted rounded-lg">
                <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Music className="text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Music Videos</h3>
                <p className="text-sm text-muted-foreground">
                  Translating audio experiences into stunning visual narratives that enhance the music.
                </p>
              </div>
              
              <div className="p-6 bg-muted rounded-lg">
                <div className="bg-gold w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Palette className="text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Brand Identity</h3>
                <p className="text-sm text-muted-foreground">
                  Developing distinctive visual languages that communicate brand values effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
