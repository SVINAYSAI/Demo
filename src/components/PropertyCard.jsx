import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { formatPrice } from '../data/properties';

export default function PropertyCard({ property, variant = 'default', onClick }) {
  const isCompact = variant === 'compact';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer ${
        isCompact ? 'w-full' : ''
      }`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isCompact ? 'h-40' : 'h-56 lg:h-64'}`}>
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          {formatPrice(property.price)}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // Handle favorite toggle
          }}
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </motion.button>

        {/* Property Type Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {property.type}
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 ${isCompact ? 'p-4' : ''}`}>
        {/* Title */}
        <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 ${
          isCompact ? 'text-base' : 'text-lg'
        }`}>
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className={`truncate ${isCompact ? 'text-xs' : 'text-sm'}`}>
            {property.city}, {property.state}
          </span>
        </div>

        {/* Features */}
        <div className={`flex items-center justify-between text-gray-600 border-t pt-3 ${
          isCompact ? 'text-xs' : 'text-sm'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{property.baths}</span>
            </div>
            {!isCompact && (
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{property.sqft.toLocaleString()} sqft</span>
              </div>
            )}
          </div>
        </div>

        {/* Description (only for default variant) */}
        {!isCompact && property.description && (
          <p className="mt-3 text-sm text-gray-500 line-clamp-2">
            {property.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
