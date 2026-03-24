import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import PropertyShowcase from '../components/PropertyShowcase';
import Benefits from '../components/Benefits';
import ChatbotWidget from '../components/ChatbotWidget';
import Footer from '../components/Footer';
import DemoPopup from '../components/DemoPopup';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleStartSearch = () => {
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <DemoPopup />
      <Navbar onStartSearch={handleStartSearch} />
      <Hero onStartSearch={handleStartSearch} />
      <FeaturedListings />
      <PropertyShowcase />
      <Benefits />
      
      {/* Chatbot Introduction Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Our AI-powered assistant is ready to help you discover the perfect property. 
                This is a demo by ChowdhuryX Corporation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Personalized property matches',
                  'Instant recommendations',
                  'Expert guidance available'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleStartSearch}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start Your Search Now
              </button>
            </div>

            {/* Chat Preview */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ChowdhuryX</div>
                    <div className="text-sm text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      Online
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-gray-700">Hello! 👋</p>
                    <p className="text-gray-700 mt-1">I'm your ChowdhuryX demo assistant.</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                    <p className="text-gray-700">I'll help you find the perfect property in just a few steps.</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2">
                      Let's get started!
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center space-x-3">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-400 text-sm">
                    Type a message...
                  </div>
                  <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from people who found their dream homes using our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Client A.',
                role: 'First-time Buyer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                quote: 'The platform made finding my first home so easy. Highly recommended!'
              },
              {
                name: 'Client B.',
                role: 'Property Investor',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                quote: 'Excellent property recommendations and seamless experience.'
              },
              {
                name: 'Client C.',
                role: 'Relocating Family',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                quote: 'Moving to a new city was stressful, but this platform helped us find the perfect neighborhood.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Property Search Today
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our satisfied customers who found their perfect home with ChowdhuryX Corporation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleStartSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Chat with AI Assistant
            </button>
            <a
              href="#listings"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Browse All Listings
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
}
