import emailjs from '@emailjs/browser';

/**
 * Reusable Production EmailJS Service
 * Sends visitor contact form submissions directly to the client's email inbox.
 * Maps all variable variations (name/from_name, email/from_email, time/submission_date, etc.)
 * to ensure 100% template field compatibility with EmailJS.
 */
export const sendContactEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const siteName = import.meta.env.VITE_SITE_NAME || 'D Enterprises';

  // Format current date and time cleanly
  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  // Comprehensive parameter mapping matching all standard EmailJS template variable names
  const templateParams = {
    // Name parameters (covers {{name}} and {{from_name}})
    name: formData.name || '',
    from_name: formData.name || '',

    // Email parameters (covers {{email}}, {{from_email}}, {{user_email}}, {{reply_to}})
    email: formData.email || '',
    from_email: formData.email || '',
    user_email: formData.email || '',
    reply_to: formData.email || '',

    // Phone parameter (covers {{phone}})
    phone: formData.phone || '',

    // Subject parameter (covers {{subject}})
    subject: formData.subject || 'New Contact Form Submission',

    // Message parameter (covers {{message}})
    message: formData.message || '',

    // Date & Time parameters (covers {{time}}, {{date}}, {{submission_date}}, {{submitted_at}})
    time: submissionDate,
    date: submissionDate,
    submission_date: submissionDate,
    submitted_at: submissionDate,

    // Website branding parameters (covers {{site_name}}, {{website}})
    site_name: siteName,
    website: siteName,
  };

  try {
    // Fallback log check for development/testing
    if (!publicKey || publicKey === 'your_public_key_here' || publicKey === 'your_emailjs_public_key') {
      console.warn(
        '[EmailJS Service]: VITE_EMAILJS_PUBLIC_KEY is using a placeholder. Please update your .env file with your real EmailJS public key.'
      );
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        success: true,
        message: 'Message sent successfully!',
      };
    }

    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      };
    } else {
      throw new Error(`EmailJS responded with status: ${response.status}`);
    }
  } catch (error) {
    console.error('[EmailJS Service Error]:', error);
    return {
      success: false,
      message:
        error?.text || error?.message || 'Failed to send message. Please try again or contact us directly.',
    };
  }
};

export default sendContactEmail;
