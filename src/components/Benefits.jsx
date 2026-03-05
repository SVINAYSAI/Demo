import { motion } from 'framer-motion';
import { Bot, Search, Zap, Users, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: Bot,
    title: 'AI Property Search',
    description: 'Our intelligent assistant learns your preferences and finds properties that match your exact needs.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Search,
    title: 'Smart Property Matching',
    description: 'Advanced algorithms analyze thousands of listings to show you only the most relevant properties.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Zap,
    title: 'Instant Property Suggestions',
    description: 'Get real-time recommendations as you browse, with properties that fit your criteria.',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    icon: Users,
    title: 'Expert Sales Assistance',
    description: 'Connect with experienced real estate professionals who guide you through every step.',
    color: 'bg-purple-100 text-purple-600'
  }
];

const features = [
  'Personalized property recommendations',
  'Real-time market insights',
  'Virtual property tours',
  'Price negotiation support',
  'Document assistance',
  'Post-purchase support'
];

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="about" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Smart Way to Find Property
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with expert human guidance to make your property search effortless.
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
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature List Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Everything You Need to Find Your Perfect Home
              </h3>
              <p className="text-blue-100 mb-8">
                From search to closing, we provide comprehensive support throughout your entire property journey.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started Today
              </motion.button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-200 flex-shrink-0" />
                  <span className="text-white text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
