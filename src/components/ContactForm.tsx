import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ComicPanel } from './ComicPanel';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ComicPanel className="animate-slide-in-right max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="comic-subtitle mb-2">Say Hello! 👋</h3>
        <p className="text-muted-foreground">
          Ready to create something amazing together?
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-2 border-foreground focus:border-primary"
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-2 border-foreground focus:border-primary"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            placeholder="Tell me about your project ideas..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="border-2 border-foreground focus:border-primary resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary text-primary-foreground hover:bg-accent font-bold text-lg py-3 border-2 border-foreground shadow-[3px_3px_0px] shadow-foreground hover:shadow-[1px_1px_0px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          Send Message! 🚀
        </Button>
      </form>
    </ComicPanel>
  );
};