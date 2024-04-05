import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]): string => {
  return twMerge(clsx(...classes));
};

export const unique = <T, Key extends keyof T>(
  array: Array<T> | T[],
  property?: Key,
): Array<T> => {
  if (!property) return Array.from(new Set([...array]));

  const set = new Set();
  return array.filter((o: T) => !set.has(o[property]) && set.add(o[property]));
};
