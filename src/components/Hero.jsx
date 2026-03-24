import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero({ onBookNow }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/salon_hero.png"
          alt="ChowdhuryX Corporation - Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/95 via-[#1a1410]/75 to-[#1a1410]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-amber-500/15 backdrop-blur-sm rounded-full px-5 py-2.5 mb-8 border border-amber-500/20"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">ChowdhuryX Corporation — Demo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where{' '}
              <span className="text-gradient-gold italic">
                Beauty
              </span>{' '}
              Meets{' '}
              <span className="text-gradient-gold italic">
                Elegance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
            >
              Experience world-class salon and grooming services 
              in a luxurious atmosphere. A demo by ChowdhuryX Corporation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onBookNow}
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full px-10 py-7 text-lg font-semibold group shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300"
              >
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-white/10"
            >
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-gold" style={{ fontFamily: "'Playfair Display', serif" }}>10+</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-gold" style={{ fontFamily: "'Playfair Display', serif" }}>5K+</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">Happy Clients</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-gold" style={{ fontFamily: "'Playfair Display', serif" }}>25+</div>
                <div className="text-xs sm:text-sm text-white/40 mt-1">Expert Stylists</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative max-w-sm mx-auto"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-amber-500/10 rounded-[2rem] blur-2xl" />
              
              <div className="relative bg-[#1a1410]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 shadow-2xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Today's Special
                </h3>
                <p className="text-amber-400 text-center font-semibold text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  30% OFF
                </p>
                <p className="text-white/50 text-center text-sm mb-6">
                  On all hair coloring services
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: Star, text: 'Premium Products' },
                    { icon: Clock, text: 'Flexible Timing' },
                    { icon: Sparkles, text: 'Expert Stylists' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onBookNow}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-3 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/20"
                >
                  Claim Offer
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-amber-500/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-amber-500/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
