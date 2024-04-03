import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]): string => {
  return twMerge(clsx(...classes));
};

export const isClient = typeof window !== 'undefined';
export const isServer = typeof window === 'undefined';
