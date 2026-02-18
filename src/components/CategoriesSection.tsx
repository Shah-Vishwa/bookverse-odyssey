import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { categories } from '@/data/books';

const CategoriesSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="categories" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Browse by Genre</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Explore <span className="gradient-text">Categories</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 md:p-8 text-center cursor-pointer transition-all duration-300 hover:glow-primary group"
            >
              <div className="text-4xl md:text-5xl mb-4">{cat.icon}</div>
              <h3 className="font-display font-semibold text-lg md:text-xl text-foreground mb-2">{cat.name}</h3>
              <p className="text-muted-foreground text-sm">{cat.description}</p>
              <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Browse →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
