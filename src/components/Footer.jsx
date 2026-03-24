import { motion } from 'framer-motion';
import { Scissors, Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight, Clock, Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = {
  services: [
    { label: 'Haircut & Styling', href: '#services' },
    { label: 'Hair Coloring', href: '#services' },
    { label: 'Facial Treatments', href: '#services' },
    { label: 'Nail Art', href: '#services' }
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Careers', href: '#' }
  ],
  support: [
    { label: 'Book Appointment', href: '#' },
    { label: 'Gift Cards', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1410] text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-gradient-to-b from-amber-500/5 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Brand & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>ChowdhuryX</span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-amber-500/80 -mt-1">Corporation</span>
                </div>
              </div>
              <p className="text-stone-400 mb-8 max-w-md leading-relaxed">
                A demo salon and spa platform by ChowdhuryX Corporation. 
                Where every visit is a transformative experience.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Stay <span className="text-gradient-gold italic">Beautiful</span>
                </h4>
                <p className="text-stone-500 text-sm mb-4">
                  Subscribe for exclusive offers and beauty tips.
                </p>
                <div className="flex space-x-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-stone-600 rounded-full focus:border-amber-500/50"
                  />
                  <Button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-full px-6">
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 bg-white/5 hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-500 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-amber-500/50"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Links */}
          <div className="grid sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-5 text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-5 text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-5 text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-10 py-8 border-t border-white/5 text-stone-400 text-sm"
        >
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-amber-500" />
            <span>rave.i@chowdhuryx.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-amber-500" />
            <span>+XX XXXXX XXXXX</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Demo Location, ChowdhuryX Corporation</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span>Mon-Sat: 9 AM - 9 PM</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-stone-500 text-sm flex items-center">
              © {new Date().getFullYear()} ChowdhuryX Corporation. Made with{' '}
              <Heart className="w-3.5 h-3.5 text-amber-500 mx-1.5 fill-amber-500" />
              All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-500 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-500 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
