import React from 'react';
import { Github, Twitter, Instagram, Heart } from 'lucide-react';

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-border/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold gradient-text">BookVerse</span>
            <p className="text-muted-foreground text-sm mt-1">Your premium digital bookstore</p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground
                  hover:text-primary hover:glow-primary transition-all duration-300"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20 text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> by BookVerse © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
