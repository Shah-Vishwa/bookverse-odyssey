import { Book } from '@/context/CartContext';

export const books: Book[] = [
  {
    id: 1,
    title: "The Quantum Garden",
    author: "Derek Künsken",
    price: 14.99,
    category: "Fiction",
    description: "A mind-bending sci-fi epic about time, evolution, and the nature of reality.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    price: 16.99,
    category: "Self-Help",
    description: "Rules for focused success in a distracted world.",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 34.99,
    category: "Programming",
    description: "A handbook of agile software craftsmanship for professional developers.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 18.99,
    category: "Non-Fiction",
    description: "A brief history of humankind that changed the way we see ourselves.",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Neuromancer",
    author: "William Gibson",
    price: 12.99,
    category: "Fiction",
    description: "The cyberpunk masterpiece that launched a genre and inspired a generation.",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Design Patterns",
    author: "Gang of Four",
    price: 39.99,
    category: "Programming",
    description: "Elements of reusable object-oriented software design patterns.",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Atomic Habits",
    author: "James Clear",
    price: 15.99,
    category: "Self-Help",
    description: "Tiny changes, remarkable results. Transform your life one habit at a time.",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Educated",
    author: "Tara Westover",
    price: 13.99,
    category: "Non-Fiction",
    description: "A powerful memoir about the transformative power of education.",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop"
  },
];

export const categories = [
  { name: "Fiction", icon: "📖", description: "Explore worlds beyond imagination", count: 2 },
  { name: "Non-Fiction", icon: "🌍", description: "Real stories, real insights", count: 2 },
  { name: "Programming", icon: "💻", description: "Level up your coding skills", count: 2 },
  { name: "Self-Help", icon: "🚀", description: "Transform your life", count: 2 },
];
