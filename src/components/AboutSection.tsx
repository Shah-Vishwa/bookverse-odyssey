import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Award } from 'lucide-react';

const stats = [
  { icon: BookOpen, label: 'Books', value: '50,000+' },
  { icon: Users, label: 'Readers', value: '2M+' },
  { icon: Award, label: 'Awards', value: '150+' },
];

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                alt="Library atmosphere"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
            </div>
            {/* Floating accent shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl glass glow-accent animate-float-slow" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About BookVerse</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              A New Era of <span className="gradient-text">Digital Reading</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              BookVerse is more than a bookstore — it's a gateway to infinite worlds. We curate the finest literature, from timeless classics to cutting-edge tech manuals, all wrapped in a premium digital experience.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center glass rounded-xl p-4"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display font-bold text-lg text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
