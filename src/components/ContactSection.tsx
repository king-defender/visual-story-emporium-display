
import React from 'react';
import { Mail, Phone, Instagram, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-darkgray text-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="section-title text-white">Get In Touch</h2>
            <p className="text-lg mb-10 opacity-80 max-w-md">
              Interested in working together or have questions about prop rentals? 
              Reach out and let's create something amazing.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-70">Email</p>
                  <a href="mailto:contact@artdirector.com" className="hover:text-gold transition-colors">
                    contact@artdirector.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-70">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-sm opacity-70">Studio Location</p>
                  <p>Los Angeles, California</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="font-medium mb-3">Connect on Social</p>
              <div className="flex gap-4">
                <a href="#" className="bg-darkgray-light p-3 rounded-full hover:bg-gold/20 transition-colors">
                  <Instagram className="text-gold" size={20} />
                </a>
                <a href="#" className="bg-darkgray-light p-3 rounded-full hover:bg-gold/20 transition-colors">
                  <Linkedin className="text-gold" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-darkgray-light p-8 rounded-lg">
            <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">Your Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-darkgray border-darkgray-light focus:border-gold/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">Your Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="johndoe@example.com" 
                    className="bg-darkgray border-darkgray-light focus:border-gold/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="bg-darkgray border-darkgray-light focus:border-gold/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">Your Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="bg-darkgray border-darkgray-light focus:border-gold/50"
                  rows={6}
                />
              </div>
              
              <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
