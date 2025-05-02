import React, { useEffect, useState } from 'react';
import '../styles/landing.css';

const Landing: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="landing-title">
                Decode and<br />
                Recreate<br />
                Website<br />
                Designs
              </h1>
              {/* Your existing content */}
            </div>
            <div className="relative">
              <img 
                src="/your-hero-image.png" 
                alt="Hero"
                className="hero-image rounded-lg w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="component-hover bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  {/* Your interactive component */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`scroll-dot ${activeSection === index ? 'active' : ''}`}
            onClick={() => {
              const section = document.querySelectorAll('section')[index];
              section.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;