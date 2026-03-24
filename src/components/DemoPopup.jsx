import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Scissors } from 'lucide-react';

export default function DemoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsVisible(false)}
          >

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#1a1410] rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-amber-900/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Gradient Bar */}
              <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>

              {/* Content */}
              <div className="p-8 pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <Scissors className="w-8 h-8 text-white" />
                </div>

                <span className="inline-flex items-center space-x-1.5 bg-amber-500/15 text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-amber-500/20">
                  <Eye className="w-3 h-3" />
                  <span>DEMO MODE</span>
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Welcome to{' '}
                  <span className="text-gradient-gold italic">
                    ChowdhuryX Corporation
                  </span>
                </h2>

                <p className="text-stone-400 mb-6 leading-relaxed">
                  This is a <strong className="text-stone-300">demo preview</strong> of a premium salon & spa website template.
                  All content, names, and details are for demonstration purposes only.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-xl p-3 text-left border border-white/10">
                    <div className="text-xs text-stone-500 font-medium mb-0.5">Contact</div>
                    <div className="text-sm font-semibold text-white">rave.i@chowdhuryx.com</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-left border border-white/10">
                    <div className="text-xs text-stone-500 font-medium mb-0.5">Type</div>
                    <div className="text-sm font-semibold text-white">Salon & Spa Demo</div>
                  </div>
                </div>

                <button
                  onClick={() => setIsVisible(false)}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-3.5 rounded-full font-semibold text-base transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                >
                  Explore Demo
                </button>

                <p className="text-xs text-stone-600 mt-4">
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
