import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Instagram, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/lib/contact';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name').max(100),
  email: z.string().trim().email('Please enter a valid email address').max(255),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, 'Message should be at least 10 characters').max(5000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    const result = await submitContactForm({
      name: values.name,
      email: values.email,
      subject: values.subject || '',
      message: values.message,
    });
    setSubmitting(false);

    if (!result.success) {
      toast({
        title: "Couldn't send your message",
        description: result.error,
        variant: 'destructive',
      });
      return;
    }

    toast({ title: 'Message sent', description: "Thanks for reaching out — I'll reply soon." });
    form.reset();
  };

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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-darkgray border-darkgray-light focus:border-gold/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-sm">Your Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="johndoe@example.com"
                            className="bg-darkgray border-darkgray-light focus:border-gold/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How can I help you?"
                          className="bg-darkgray border-darkgray-light focus:border-gold/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm">Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="bg-darkgray border-darkgray-light focus:border-gold/50"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold hover:bg-gold-dark text-white"
                >
                  {submitting ? (
                    <Loader2 size={16} className="mr-2 animate-spin" />
                  ) : (
                    <Send size={16} className="mr-2" />
                  )}
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
