import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' }
  ],
  properties: [
    { label: 'Buy Property', href: '#' },
    { label: 'Rent Property', href: '#' },
    { label: 'Sell Property', href: '#' },
    { label: 'Property Valuation', href: '#' }
  ],
  support: [
    { label: 'Help Center', href: '#' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Brand & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Property Finder</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Your AI-powered property search assistant. Find your dream home with personalized recommendations and expert guidance.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
                <div className="flex space-x-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 rounded-full"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
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
                    className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
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
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
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
              <h4 className="text-lg font-semibold mb-4">Properties</h4>
              <ul className="space-y-3">
                {footerLinks.properties.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
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
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
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
          className="flex flex-wrap justify-center gap-6 py-8 border-t border-slate-800 text-gray-400 text-sm"
        >
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>contact@propertyfinder.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>123 Property Lane, New York, NY 10001</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Property Finder. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
