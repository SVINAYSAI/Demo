import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scissors, Calendar, Clock, User, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { services } from '../data/services';

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

export default function BookingModal({ isOpen, setIsOpen }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setSelectedService(null);
      setSelectedDate('');
      setSelectedTime('');
      setFormData({ name: '', phone: '', email: '' });
      setIsOpen(false);
    }, 3000);
  };

  const resetAndClose = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
    setFormData({ name: '', phone: '', email: '' });
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-lg z-[80] flex items-start justify-center"
          >
            <div className="bg-[#1a1410] rounded-3xl shadow-2xl border border-amber-900/30 w-full max-h-full overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-[#1a1410] rounded-t-3xl border-b border-amber-900/20 p-6 flex items-center justify-between z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                    <Scissors className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Book Appointment
                    </h3>
                    <p className="text-stone-500 text-xs">Step {step} of 3</p>
                  </div>
                </div>
                <button
                  onClick={resetAndClose}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pt-4">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Booking Confirmed!
                      </h3>
                      <p className="text-stone-400">
                        We'll send you a confirmation shortly.
                      </p>
                    </motion.div>
                  ) : step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>Select a Service</span>
                      </h4>
                      <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                        {services.slice(0, 6).map((service) => (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                              selectedService?.id === service.id
                                ? 'border-amber-500 bg-amber-500/10'
                                : 'border-white/10 bg-white/5 hover:border-amber-500/30 hover:bg-white/[0.07]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-white font-semibold text-sm">{service.title}</span>
                                <div className="flex items-center space-x-3 mt-1">
                                  <span className="text-stone-500 text-xs flex items-center">
                                    <Clock className="w-3 h-3 mr-1" /> {service.duration}
                                  </span>
                                  <span className="text-amber-400 text-xs font-semibold">₹{service.price}</span>
                                </div>
                              </div>
                              {selectedService?.id === service.id && (
                                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                      <Button
                        onClick={() => selectedService && setStep(2)}
                        disabled={!selectedService}
                        className="w-full mt-6 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full py-5 font-semibold disabled:opacity-40"
                      >
                        Continue
                      </Button>
                    </motion.div>
                  ) : step === 2 ? (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-amber-400" />
                        <span>Select Date & Time</span>
                      </h4>
                      
                      <div className="mb-6">
                        <label className="text-stone-400 text-sm mb-2 block">Date</label>
                        <Input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="bg-white/5 border-white/10 text-white rounded-xl [color-scheme:dark]"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-sm mb-2 block">Time</label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${
                                selectedTime === time
                                  ? 'bg-amber-500 text-white'
                                  : 'bg-white/5 text-stone-400 hover:bg-white/10 border border-white/10'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3 mt-6">
                        <Button
                          onClick={() => setStep(1)}
                          variant="outline"
                          className="flex-1 rounded-full py-5 border-white/10 text-white hover:bg-white/5"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={() => selectedDate && selectedTime && setStep(3)}
                          disabled={!selectedDate || !selectedTime}
                          className="flex-1 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full py-5 font-semibold disabled:opacity-40"
                        >
                          Continue
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                        <User className="w-4 h-4 text-amber-400" />
                        <span>Your Details</span>
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <label className="text-stone-400 text-sm mb-2 block">Full Name</label>
                          <Input
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-white/5 border-white/10 text-white rounded-xl placeholder:text-stone-600"
                          />
                        </div>
                        <div>
                          <label className="text-stone-400 text-sm mb-2 block">Phone Number</label>
                          <Input
                            placeholder="+91 99999 99999"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-white/5 border-white/10 text-white rounded-xl placeholder:text-stone-600"
                          />
                        </div>
                        <div>
                          <label className="text-stone-400 text-sm mb-2 block">Email (optional)</label>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-white/5 border-white/10 text-white rounded-xl placeholder:text-stone-600"
                          />
                        </div>
                      </div>

                      {/* Summary */}
                      <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                        <h5 className="text-amber-400 text-sm font-semibold mb-3">Booking Summary</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-stone-500">Service</span>
                            <span className="text-white">{selectedService?.title}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-500">Date</span>
                            <span className="text-white">{selectedDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-stone-500">Time</span>
                            <span className="text-white">{selectedTime}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-white/10">
                            <span className="text-stone-500">Total</span>
                            <span className="text-amber-400 font-bold">₹{selectedService?.price}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-3 mt-6">
                        <Button
                          onClick={() => setStep(2)}
                          variant="outline"
                          className="flex-1 rounded-full py-5 border-white/10 text-white hover:bg-white/5"
                        >
                          Back
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={!formData.name || !formData.phone}
                          className="flex-1 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white rounded-full py-5 font-semibold disabled:opacity-40"
                        >
                          Confirm Booking
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
