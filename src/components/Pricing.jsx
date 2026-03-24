import { motion } from 'framer-motion';
import { Sparkles, Check, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Essential',
    description: 'Perfect for basic grooming needs',
    price: 999,
    period: 'per visit',
    features: [
      'Classic Haircut & Styling',
      'Basic Facial Cleanup',
      'Hair Wash & Blow Dry',
      'Eyebrow Threading',
      'Complimentary Beverage'
    ],
    popular: false,
    cta: 'Book Now'
  },
  {
    name: 'Premium',
    description: 'Our most popular package',
    price: 2499,
    period: 'per visit',
    features: [
      'Creative Haircut & Styling',
      'Deep Cleansing Facial',
      'Hair Spa Treatment',
      'Manicure & Pedicure',
      'Beard Grooming (Men)',
      'Head Massage',
      'Premium Products Used'
    ],
    popular: true,
    cta: 'Book Now'
  },
  {
    name: 'Luxe',
    description: 'The ultimate pampering experience',
    price: 4999,
    period: 'per visit',
    features: [
      'Everything in Premium',
      'Hair Coloring / Highlights',
      'Gold Facial Treatment',
      'Gel Nail Art',
      'Full Body Waxing',
      'Aromatherapy Massage',
      '3-hour VIP Session',
      'Complimentary Gift Kit'
    ],
    popular: false,
    cta: 'Book Now'
  }
];

export default function Pricing() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-100/60 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Pricing</span>
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1410] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{' '}
            <span className="text-gradient-gold italic">Packages</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Choose the perfect package that suits your needs. All packages include 
            a personalized consultation with our experts.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'bg-[#1a1410] text-white shadow-2xl shadow-amber-500/10 scale-[1.02] lg:scale-105 z-10'
                  : 'bg-white text-[#1a1410] shadow-xl border border-stone-200 hover:border-amber-300'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-600 to-amber-500 py-2 text-center">
                  <span className="text-white text-sm font-semibold flex items-center justify-center space-x-1.5">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan name */}
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ₹{plan.price.toLocaleString()}
                  </span>
                  <span className={`text-sm ml-2 ${plan.popular ? 'text-stone-400' : 'text-stone-500'}`}>
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular
                          ? 'bg-amber-500/20'
                          : 'bg-amber-100'
                      }`}>
                        <Check className={`w-3.5 h-3.5 ${plan.popular ? 'text-amber-400' : 'text-amber-600'}`} />
                      </div>
                      <span className={`text-sm ${plan.popular ? 'text-stone-300' : 'text-stone-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full rounded-full py-6 font-semibold text-base transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-[#1a1410] hover:bg-[#2a1f15] text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
