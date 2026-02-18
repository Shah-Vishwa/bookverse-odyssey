import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 md:p-10 space-y-6"
        >
          {(['Name', 'Email'] as const).map((label) => (
            <div key={label} className="relative group">
              <input
                type={label === 'Email' ? 'email' : 'text'}
                required
                placeholder=" "
                className="peer w-full bg-secondary/30 border border-border rounded-xl px-4 pt-6 pb-2 text-foreground outline-none
                  focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
              />
              <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all duration-300 pointer-events-none">
                {label}
              </label>
            </div>
          ))}

          <div className="relative group">
            <textarea
              required
              placeholder=" "
              rows={4}
              className="peer w-full bg-secondary/30 border border-border rounded-xl px-4 pt-6 pb-2 text-foreground outline-none resize-none
                focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
            />
            <label className="absolute left-4 top-2 text-xs text-muted-foreground peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary transition-all duration-300 pointer-events-none">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full btn-glow bg-primary text-primary-foreground font-semibold py-4 rounded-xl flex items-center justify-center gap-2 glow-primary transition-all duration-300"
          >
            {submitted ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓ Message Sent!</motion.span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
