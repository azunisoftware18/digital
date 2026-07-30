import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Reusable utility function to merge Tailwind CSS classes safely without conflicts.
 * @param  {...any} inputs - Class names or conditions
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
