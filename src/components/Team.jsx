import { motion } from 'framer-motion';
import { Instagram, Sparkles } from 'lucide-react';
import { teamMembers } from '../data/services';

export default function Team() {
  return (
    <section className="py-24 lg:py-32 bg-salon-warm relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />

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
            <span>Our Team</span>
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1410] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet Our{' '}
            <span className="text-gradient-gold italic">Expert</span> Stylists
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Our talented team of beauty professionals are passionate about 
            helping you look and feel your absolute best.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social links on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <a
                      href="#"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3
                    className="text-lg font-bold text-[#1a1410] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-stone-400 text-xs">{member.specialty}</p>
                  <div className="mt-3 inline-block bg-stone-100 text-stone-500 px-3 py-1 rounded-full text-xs">
                    {member.experience} experience
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
