import { motion } from 'framer-motion';
import { Scissors, Heart, Award, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: Scissors,
    title: 'Master Stylists',
    description: 'Our team of certified professionals brings years of international training and creative vision.',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Heart,
    title: 'Premium Products',
    description: 'We exclusively use luxury salon-grade products from top global brands for the best results.',
    color: 'from-rose-400 to-rose-500'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized multiple times for excellence in styling, customer service, and innovation.',
    color: 'from-violet-400 to-violet-500'
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Open 6 days a week with extended hours. Walk-ins welcome, appointments preferred.',
    color: 'from-emerald-400 to-emerald-500'
  }
];

const features = [
  'Personalized consultations',
  'Hygienic & sanitized tools',
  'Complimentary beverages',
  'Private treatment rooms',
  'Loyalty rewards program',
  'Free parking available'
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#1a1410] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 bg-amber-500/15 text-amber-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-amber-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Why Choose Us</span>
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The{' '}
            <span className="text-gradient-gold italic">Art</span> of{' '}
            <span className="text-gradient-gold italic">Beauty</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            We blend artistry with expertise to deliver an unmatched salon experience 
            that leaves you feeling confident and beautiful.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-stone-400 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature List Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-[2rem] p-8 lg:p-14 relative overflow-hidden"
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            <div>
              <h3
                className="text-2xl lg:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Everything You Need for Your Perfect Look
              </h3>
              <p className="text-amber-50/80 mb-8 text-lg leading-relaxed">
                From the moment you walk in to the final reveal, we ensure a premium 
                experience that pampers you from head to toe.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-amber-700 px-10 py-4 rounded-full font-bold hover:bg-amber-50 transition-colors shadow-xl text-lg"
              >
                Book Your Visit
              </motion.button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
