import { motion } from 'framer-motion';
import { Bot, User, Building2, MapPin, Bed, Bath } from 'lucide-react';
import { formatPrice } from '../data/properties';

export default function ChatMessage({ message, isLast }) {
  const isBot = message.sender === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`flex items-start space-x-3 max-w-[85%] ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? 'bg-blue-600' : 'bg-gray-300'
        }`}>
          {isBot ? (
            <Bot className="w-4 h-4 text-white" />
          ) : (
            <User className="w-4 h-4 text-gray-600" />
          )}
        </div>

        {/* Message Content */}
        <div className={`${
          isBot 
            ? 'bg-white rounded-2xl rounded-tl-none shadow-sm' 
            : 'bg-blue-600 rounded-2xl rounded-tr-none'
        } px-4 py-3`}>
          {/* Text Message */}
          <div className={`whitespace-pre-line text-sm ${
            isBot ? 'text-gray-700' : 'text-white'
          }`}>
            {message.text}
          </div>

          {/* Property Cards (if any) */}
          {message.properties && message.properties.length > 0 && (
            <div className="mt-4 space-y-3">
              {message.properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  {/* Property Image */}
                  <div className="relative h-32">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {formatPrice(property.price)}
                    </div>
                  </div>

                  {/* Property Info */}
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {property.title}
                    </h4>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {property.city}, {property.state}
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-gray-600">
                      <span className="flex items-center">
                        <Bed className="w-3 h-3 mr-1" />
                        {property.beds}
                      </span>
                      <span className="flex items-center">
                        <Bath className="w-3 h-3 mr-1" />
                        {property.baths}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                        {property.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
