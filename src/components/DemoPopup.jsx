import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Monitor } from 'lucide-react';

export default function DemoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVisible(false)}
          >
            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Gradient Bar */}
              <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600" />

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>

              {/* Content */}
              <div className="p-8 pt-6 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Monitor className="w-8 h-8 text-white" />
                </div>

                {/* Badge */}
                <span className="inline-flex items-center space-x-1.5 bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                  <Eye className="w-3 h-3" />
                  <span>DEMO MODE</span>
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  Welcome to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    ChowdhuryX Corporation
                  </span>
                </h2>

                <p className="text-gray-500 mb-6 leading-relaxed">
                  This is a <strong>demo preview</strong> of a real estate website template. 
                  All content, names, and details shown are for demonstration purposes only.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-50 rounded-xl p-3 text-left">
                    <div className="text-xs text-gray-400 font-medium mb-0.5">Contact</div>
                    <div className="text-sm font-semibold text-gray-700">rave.i@chowdhuryx.com</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 text-left">
                    <div className="text-xs text-gray-400 font-medium mb-0.5">Type</div>
                    <div className="text-sm font-semibold text-gray-700">Real Estate Demo</div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3.5 rounded-full font-semibold text-base transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Explore Demo
                </button>

                <p className="text-xs text-gray-400 mt-4">
                  © {new Date().getFullYear()} ChowdhuryX Corporation. All rights reserved.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
