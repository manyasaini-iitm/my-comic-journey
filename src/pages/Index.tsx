import { useEffect, useState } from 'react';
import { ComicPanel, SpeechBubble } from '@/components/ComicPanel';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import heroComic from '@/assets/hero-comic.jpg';
import constructionComic from '@/assets/construction-comic.jpg';
import graduationComic from '@/assets/graduation-comic.jpg';
import pokemonCardsComic from '@/assets/pokemon-cards-comic.jpg';

const Index = () => {
  const [showContact, setShowContact] = useState(false);
  const [visiblePanels, setVisiblePanels] = useState<number[]>([]);

  useEffect(() => {
    // Animate panels in sequence
    const intervals = [0, 600, 1200, 1800, 2400];
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setVisiblePanels(prev => [...prev, index]);
      }, delay);
    });
  }, []);

  const scrollToContact = () => {
    setShowContact(true);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b-2 border-foreground z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Jacob Di Domenico</h1>
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-accent font-bold px-6 py-2 border-2 border-foreground shadow-[3px_3px_0px] shadow-foreground hover:shadow-[1px_1px_0px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Say hello 👋
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="animate-float">
              <h1 className="comic-title mb-4">
                Crafting user first designs and collecting a{' '}
                <span className="text-accent">few cards</span> along the way
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                From pushing pixels to collecting Pokémon cards: how I design, mentor, and stay inspired.
              </p>
            </div>
            
            {visiblePanels.includes(0) && (
              <ComicPanel className="animate-bounce-in max-w-4xl mx-auto mb-12">
                <img 
                  src={heroComic} 
                  alt="Comic illustration of designer at work" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <SpeechBubble delay={300}>
                  <p className="text-lg font-semibold">
                    "Welcome to my comic strip journey! Let me tell you how I went from construction to creating digital experiences..."
                  </p>
                </SpeechBubble>
              </ComicPanel>
            )}
          </section>

          {/* Comic Strip Panels */}
          <section className="space-y-16">
            
            {/* Panel 1: The Beginning */}
            {visiblePanels.includes(1) && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ComicPanel className="animate-slide-in-left">
                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 mb-4">
                    <h3 className="comic-subtitle mb-2 text-accent">My story</h3>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Asking myself...</h2>
                  <SpeechBubble>
                    <p className="text-base">
                      "How I became a professional box drawer, button mover, and digital problem solver"
                    </p>
                  </SpeechBubble>
                  <p className="text-muted-foreground mt-4">
                    Back in 2012, when I first started university, I had no idea UX design even existed. 
                    If someone had told me I'd end up here, I wouldn't have believed it.
                  </p>
                </ComicPanel>
                
                <ComicPanel className="animate-slide-in-right">
                  <img 
                    src={constructionComic} 
                    alt="Construction worker comic illustration" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </ComicPanel>
              </div>
            )}

            {/* Panel 2: Education Journey */}
            {visiblePanels.includes(2) && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ComicPanel className="animate-slide-in-left md:order-2">
                  <img 
                    src={graduationComic} 
                    alt="Graduation comic illustration" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </ComicPanel>
                
                <ComicPanel className="animate-slide-in-right md:order-1">
                  <h2 className="text-2xl font-bold mb-4">The Learning Phase</h2>
                  <SpeechBubble>
                    <p className="text-base">
                      "After graduation, still unsure of my path, I took an apprenticeship with a fire protection company..."
                    </p>
                  </SpeechBubble>
                  <p className="text-muted-foreground mt-4">
                    Working in the trades taught me a lot, but fitting spindle pipe wasn't for me. 
                    I soon found myself in an office job, but again, something was missing. 
                    I wanted work that felt meaningful and fulfilling.
                  </p>
                </ComicPanel>
              </div>
            )}

            {/* Panel 3: The Transformation */}
            {visiblePanels.includes(3) && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ComicPanel className="animate-slide-in-left">
                  <div className="bg-primary/20 border-2 border-primary rounded-lg p-4 mb-4">
                    <h3 className="comic-subtitle mb-2 text-primary">Now what?</h3>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">From uncertain times to finding my creative calling</h2>
                  <SpeechBubble>
                    <p className="text-base">
                      "At the start of the pandemic (a time filled with uncertainty) I decided to leave my job in construction..."
                    </p>
                  </SpeechBubble>
                  <p className="text-muted-foreground mt-4">
                    I immersed myself in learning UX/UI design, and six months later, 
                    I was fortunate to land a role as a web designer, officially beginning my journey 
                    as a professional box drawer.
                  </p>
                </ComicPanel>
                
                <ComicPanel className="animate-slide-in-right">
                  <img 
                    src={pokemonCardsComic} 
                    alt="Pokemon cards comic illustration" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </ComicPanel>
              </div>
            )}

            {/* Panel 4: Current State */}
            {visiblePanels.includes(4) && (
              <ComicPanel className="animate-bounce-in text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Today's Chapter</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2">🎨 Designer</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating user-first experiences that solve real problems
                    </p>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2">🎯 Mentor</h3>
                    <p className="text-sm text-muted-foreground">
                      Helping others discover their creative potential
                    </p>
                  </div>
                  <div className="bg-secondary/20 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2">🃏 Collector</h3>
                    <p className="text-sm text-muted-foreground">
                      Finding inspiration in the art of Pokémon cards
                    </p>
                  </div>
                </div>
                <SpeechBubble>
                  <p className="text-lg">
                    "My university degree in communications and skills from past roles were vital 
                    to getting my foot in the design door. I wouldn't be where I am today without that diverse experience."
                  </p>
                </SpeechBubble>
              </ComicPanel>
            )}
          </section>

          {/* Contact Section */}
          {showContact && (
            <section id="contact" className="mt-24">
              <div className="text-center mb-12">
                <h2 className="comic-title text-3xl mb-4">Ready for the Next Panel?</h2>
                <p className="text-lg text-muted-foreground">
                  Let's create something amazing together!
                </p>
              </div>
              <ContactForm />
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground bg-secondary/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Jacob Di Domenico - Crafting digital experiences, one pixel at a time ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
