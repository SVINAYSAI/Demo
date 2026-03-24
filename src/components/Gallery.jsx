import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const galleryItems = [
  {
    image: '/images/salon_styling.png',
    title: 'Hair Styling',
    category: 'Hair',
    size: 'large'
  },
  {
    image: '/images/salon_coloring.png',
    title: 'Color Magic',
    category: 'Coloring',
    size: 'small'
  },
  {
    image: '/images/salon_nails.png',
    title: 'Nail Artistry',
    category: 'Nails',
    size: 'small'
  },
  {
    image: '/images/salon_beard.png',
    title: 'Beard Grooming',
    category: 'Grooming',
    size: 'small'
  },
  {
    image: '/images/salon_facial.png',
    title: 'Luxury Facial',
    category: 'Skincare',
    size: 'small'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="inline-flex items-center space-x-2 bg-[#1a1410] text-amber-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Our Gallery</span>
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1410] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stunning{' '}
              <span className="text-gradient-gold italic">Transformations</span>
            </h2>
            <p className="text-lg text-stone-500 max-w-xl">
              Browse through our portfolio of beautiful makeovers, creative hair designs, 
              and luxurious treatments.
            </p>
          </div>
          <motion.a
            href="#services"
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-amber-600 font-semibold mt-6 lg:mt-0 group"
          >
            View All Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Large Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:row-span-2"
          >
            <div className="group relative h-full min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden cursor-pointer">
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/90 via-[#1a1410]/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm">
                    {galleryItems[0].category}
                  </span>
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {galleryItems[0].title}
                </h3>
                <p className="text-white/60 text-sm">
                  Expert styling with attention to every detail
                </p>
              </div>
            </div>
          </motion.div>

          {/* Smaller Gallery Items */}
          {galleryItems.slice(1).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="group relative h-64 lg:h-72 rounded-3xl overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-[#1a1410]/10 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-amber-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
