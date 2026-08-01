import React from 'react';
import { toast } from 'react-toastify';
import { CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * Reusable Production Brand Toast Utility
 * Premium   Gold & Navy Theme
 */
export const showSuccessToast = (message) => {
  toast.success(
    message || 'Thank you! Your quote request has been submitted successfully.',
    {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: <CheckCircle2 className="w-5 h-5 text-[#c5a059] flex-shrink-0" />,
      toastId: 'contact-success-toast',
      className: '!bg-[#0a1d72] !text-white !border !border-[#c5a059]/40 !rounded-xl !shadow-2xl !p-4 font-sans text-xs sm:text-sm font-semibold',
    }
  );
};

export const showErrorToast = (message) => {
  toast.error(
    message || 'Something went wrong. Please try again.',
    {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />,
      toastId: 'contact-error-toast',
      className: '!bg-[#0f172a] !text-white !border !border-red-500/30 !rounded-xl !shadow-2xl !p-4 font-sans text-xs sm:text-sm font-semibold',
    }
  );
};
