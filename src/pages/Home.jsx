import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import BookingModal from '../components/BookingModal';
import Footer from '../components/Footer';
import DemoPopup from '../components/DemoPopup';
import { motion } from 'framer-motion';
import { Sparkles, Star, Calendar, MessageCircle } from 'lucide-react';
import { testimonials } from '../data/services';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <DemoPopup />
      <Navbar onBookNow={handleBookNow} />
      <Hero onBookNow={handleBookNow} />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Team />
      <Pricing />
      
      {/* Booking CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white"
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ready for a{' '}
                <span className="italic">Stunning</span>{' '}
                Transformation?
              </h2>
              <p className="text-lg text-amber-50/80 mb-8 leading-relaxed">
                Book your appointment today and let our expert stylists create 
                the perfect look for you. Walk-ins welcome, but appointments 
                are recommended for the best experience.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Personalized style consultations',
                  'Premium salon-grade products',
                  'Satisfaction guaranteed'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-amber-50">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleBookNow}
                className="bg-white text-amber-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl"
              >
                Book Your Appointment
              </button>
            </motion.div>

            {/* Booking Preview Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
              <div className="relative bg-[#1a1410] rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-amber-900/30">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Quick Booking
                    </div>
                    <div className="text-sm text-green-400 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                      Available Now
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-stone-400 text-sm">Choose your service</p>
                    <p className="text-white font-medium mt-1">Hair Styling • ₹45</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-stone-400 text-sm">Select date & time</p>
                    <p className="text-white font-medium mt-1">Today • 3:00 PM</p>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full mt-6 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white py-3.5 rounded-full font-semibold transition-all"
                >
                  Book This Slot
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-salon-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Testimonials</span>
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1410] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Our <span className="text-gradient-gold italic">Clients</span> Say
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from people who love their experience at ChowdhuryX Corporation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100"
              >
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-stone-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-200"
                  />
                  <div>
                    <div className="font-bold text-[#1a1410]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-amber-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-[#1a1410] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-6" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Begin Your{' '}
              <span className="text-gradient-gold italic">Beauty</span>{' '}
              Journey Today
            </h2>
            <p className="text-lg text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our satisfied clients who trust ChowdhuryX Corporation for 
              their beauty and grooming needs. Your transformation awaits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleBookNow}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30"
              >
                Book Your Appointment
              </button>
              <a
                href="#services"
                className="bg-transparent border-2 border-white/20 text-white hover:bg-white hover:text-[#1a1410] px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingOpen} setIsOpen={setIsBookingOpen} />
    </div>
  );
}
