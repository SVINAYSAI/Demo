import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Bed, Bath } from 'lucide-react';
import { properties, formatPrice } from '../data/properties';

export default function PropertyShowcase() {
  // Select showcase properties (luxury/high-end)
  const showcaseProperties = properties
    .filter(p => p.price >= 800000)
    .slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
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
            <span className="inline-block bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Premium Collection
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Luxury Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore our exclusive collection of high-end properties for discerning buyers.
            </p>
          </div>
          <motion.a
            href="#listings"
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-blue-600 font-semibold mt-6 lg:mt-0 group"
          >
            View All Luxury Homes
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Large Featured Property */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:row-span-2"
          >
            <div className="group relative h-full min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden cursor-pointer">
              <img
                src={showcaseProperties[0]?.image}
                alt={showcaseProperties[0]?.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {showcaseProperties[0]?.type}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {showcaseProperties[0]?.title}
                </h3>
                <div className="flex items-center text-white/80 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{showcaseProperties[0]?.city}, {showcaseProperties[0]?.state}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-white/80">
                    <span className="flex items-center">
                      <Bed className="w-5 h-5 mr-1" />
                      {showcaseProperties[0]?.beds} Beds
                    </span>
                    <span className="flex items-center">
                      <Bath className="w-5 h-5 mr-1" />
                      {showcaseProperties[0]?.baths} Baths
                    </span>
                  </div>
                  <span className="text-3xl font-bold text-white">
                    {formatPrice(showcaseProperties[0]?.price)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Properties */}
          {showcaseProperties.slice(1, 3).map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="group relative h-64 lg:h-72 rounded-3xl overflow-hidden cursor-pointer">
                <img
                  src={property.image}
                  alt={property.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
                    {property.type}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {property.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.city}
                    </span>
                    <span className="text-xl font-bold text-white">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
