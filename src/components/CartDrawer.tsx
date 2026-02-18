import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md glass-strong z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30">
              <h2 className="font-display text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Your Cart
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
                  <p className="font-display text-lg">Your cart is empty</p>
                  <p className="text-sm mt-1">Add some books to get started!</p>
                </div>
              ) : (
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50, height: 0 }}
                      className="flex gap-4 glass rounded-xl p-3"
                    >
                      <img src={item.cover} alt={item.title} className="w-16 h-20 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-foreground truncate">{item.title}</h4>
                        <p className="text-muted-foreground text-xs">{item.author}</p>
                        <p className="text-primary font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded hover:bg-secondary/50">
                          <Plus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded hover:bg-secondary/50">
                          <Minus className="w-3 h-3" />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="self-start p-1 text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border/30 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-display font-bold text-xl">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full btn-glow bg-primary text-primary-foreground font-semibold py-4 rounded-xl glow-primary transition-all duration-300">
                  Checkout
                </button>
                <button onClick={clearCart} className="w-full text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
