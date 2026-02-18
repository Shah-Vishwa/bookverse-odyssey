import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';
import { books } from '@/data/books';
import { useCart } from '@/context/CartContext';

const BookCard: React.FC<{ book: typeof books[0]; index: number }> = ({ book, index }) => {
  const { addToCart } = useCart();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [added, setAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -15, y: x * 15 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleAdd = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:glow-primary"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Book cover */}
        <div className="relative overflow-hidden aspect-[2/3]">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        </div>

        {/* Info */}
        <div className="p-4 md:p-5">
          <p className="text-primary text-xs font-medium tracking-wider uppercase mb-1">{book.category}</p>
          <h3 className="font-display font-semibold text-foreground text-base md:text-lg mb-1 truncate">{book.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{book.author}</p>

          <div className="flex items-center justify-between">
            <span className="font-display font-bold text-xl text-foreground">${book.price}</span>
            <button
              onClick={handleAdd}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                added
                  ? 'bg-green-500/20 text-green-400 scale-95'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground btn-glow'
              }`}
            >
              {added ? (
                '✓ Added'
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BooksSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="books" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Curated Collection</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Books</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hand-picked selections to inspire, educate, and transport you to other worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {books.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
