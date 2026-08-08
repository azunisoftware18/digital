import { useState } from 'react';
import { motion } from 'framer-motion';
import caseStudiesBg from '../../assets/images/backgrounds/case-studies-bg.jpg';
import { showSuccessToast, showErrorToast } from '../../utils/toast';

export const CaseStudies = () => {
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      // Same Google Apps Script API used on Contact page
      const data = new FormData();

      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('subject', formData.subject);
      data.append('message', formData.message);

      const result = await fetch(
        'https://script.google.com/macros/s/AKfycbxco9ZqcNhoIWQ23md7gwqVVRaj9YD9ls1e3QB4qvdiPX9-vvDQuC2QAygpWX3wcOUQYg/exec',
        {
          method: 'POST',
          body: data,
        }
      );

      const res = await result.json();

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
        showErrorToast(res.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);

      showErrorToast('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="relative overflow-hidden mx-auto max-w-[1600px] w-full"
      style={{
        borderRadius: '100% 100% 100% 100% / 4% 4% 4% 4%',
        padding: '6rem 0',
      }}
    >
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={caseStudiesBg}
          alt="Office Team Background"
          className="w-full h-full object-cover select-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/60 via-[#312e81]/65 to-[#4c1d95]/75"></div>
      </div>

      {/* Content Wrapper */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center md:text-left flex flex-col justify-center h-full"
          >
            <span className="text-[#c5a059] font-bold tracking-wider uppercase text-sm block mb-2">
              FREE CONSULTATION
            </span>

            <div className="relative inline-block w-full max-w-md">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4 relative">
                Get a Free Digital Marketing Consultation
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Contact our experts for a complimentary digital strategy session. We'll analyze your
                brand, explore growth opportunities, and deliver a custom action plan.
              </p>

              {/* Paper Plane */}
              <div className="hidden lg:flex absolute right-[-15%] bottom-[15%] items-end z-20">
                <div className="w-16 border-b-[1.5px] border-dashed border-white/60 mb-5 -rotate-[15deg]"></div>

                <div className="text-[#38bdf8] transform -rotate-[15deg] -mb-1 -ml-1">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M58 6L6 28L26 38L58 6Z" fill="#38bdf8" />
                    <path d="M58 6L36 58L26 38L58 6Z" fill="#0284c7" />
                    <path d="M26 38V50L33 43L26 38Z" fill="#e0f2fe" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Page Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                />

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#c5a059] resize-none"
                />
              </div>

              <div className="pt-2 flex justify-center md:justify-start">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`inline-flex items-center justify-center rounded bg-[#c5a059] px-8 py-4 text-xs font-extrabold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#b38e47] shadow-md hover:shadow-lg ${
                    submitting ? 'opacity-65 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {submitting ? 'SENDING...' : 'GET FREE CONSULTATION'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
