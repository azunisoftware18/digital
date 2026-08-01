import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import { sendContactEmail } from '../services/emailService';
import { showSuccessToast, showErrorToast } from '../utils/toast';
import phoneIcon from '../assets/images/icons/phone-icon.png';
import emailIcon from '../assets/images/icons/email-icon.png';
import locationIcon from '../assets/images/icons/location-icon.png';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      showErrorToast('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      showErrorToast('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      showErrorToast('Please enter your message.');
      return;
    }

    setSubmitting(true);

    try {
      // const result = await sendContactEmail(formData);
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);
      data.append('subject', formData.subject);

      const result = await fetch(
        'https://script.google.com/macros/s/AKfycbxco9ZqcNhoIWQ23md7gwqVVRaj9YD9ls1e3QB4qvdiPX9-vvDQuC2QAygpWX3wcOUQYg/exec',
        {
          method: 'POST',
          body: data,
          header: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const res = await result.json();
      // console.log(res);

      if (res.status === 'success') {
        showSuccessToast('Thank you! Your quote request has been submitted successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        showErrorToast(result.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const officeAddress = '26°52\'37.7"N 75°45\'38.5"E';

  const mapQueryUrl =
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.8299227239195!2d75.75811377543823!3d26.877144176668395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUyJzM3LjciTiA3NcKwNDUnMzguNSJF!5e0!3m2!1sen!2sin!4v1785229323767!5m2!1sen!2sin';

  const mapDirectUrl = 'https://maps.app.goo.gl/gdzpXCkhzG7fNoc69';

  return (
    <PageTransition>
      {/* 1. Top Banner */}
      <section className="bg-[#c5a059] py-16 sm:py-20 text-center relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight relative z-10">
          Contact Us
        </h1>
      </section>

      {/* 2. Contact Cards Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/phone-icon.png';
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Phone</h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Please call us and we will be happy to assist you. We work with you, not for you.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919460921962"
                  className="text-base font-bold text-slate-900 hover:text-[#c5a059] transition-colors"
                >
                  +91 9460921962
                </a>
                <a
                  href="tel:+917733999060"
                  className="text-base font-bold text-slate-900 hover:text-[#c5a059] transition-colors"
                >
                  +91 7733999060
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/email-icon.png';
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Email</h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Please email contact form and we will be happy to assist you. We work with you, not
                for you.
              </p>
              <a
                href="mailto:omenterprises.jaipurdigital@gmail.com"
                className="text-base font-bold text-slate-900 hover:text-[#c5a059] transition-colors break-all"
              >
                omenterprises.jaipurdigital@gmail.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={locationIcon}
                  alt="Location Icon"
                  className="w-14 h-14 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/location-icon.png';
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Location</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs font-medium">
                {officeAddress}
              </p>
              <a
                href={mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-slate-900 hover:text-[#c5a059] transition-colors inline-flex items-center gap-1 group"
              >
                <span>View On Google Map</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Schedule Meeting Form Section */}
      <section id="contact-form" className="bg-[#eef1f4] py-16 sm:py-24 scroll-mt-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <button
              type="button"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-800 focus:outline-none cursor-pointer hover:text-[#c5a059] transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#c5a059]" />
              <span>GET IN TOUCH</span>
            </button>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Schedule Meeting
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              So kind brought can&apos;t wherein i man fly fruit it beginning meat one a gathered
              our day moving have beginning him.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`bg-[#c5a059] hover:bg-[#b38e47] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 transition-all duration-200 focus:outline-none inline-flex items-center justify-center gap-2.5 group shadow-md hover:shadow-lg rounded-sm ${
                    submitting ? 'opacity-65 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  <span>{submitting ? 'SENDING...' : 'SEND YOUR MESSAGE'}</span>
                  <Send
                    className={`w-4 h-4 transition-transform duration-200 ${submitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Google Map Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/9] sm:aspect-[21/9] bg-slate-100 relative">
            <iframe
              title="Digi Mitra Enterprises Office Location Map"
              src={mapQueryUrl}
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
