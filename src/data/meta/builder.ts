import { unique } from '@/lib/utils';

import { BASE_URL } from '../app';

/**
 * 指定されたキーワードをマッピングする
 */
export const mapKeywords = (keywords?: string | string[] | null): string => {
  if (!keywords) return '';
  if (Array.isArray(keywords)) {
    return unique(keywords || []).join(',');
  }

  return keywords;
};

/**
 * ビルド OG イメージ URL
 */
export const buildOgImageURL = (title: string, description: string): string =>
  `${BASE_URL}/api/og?title=${encodeURIComponent(
    title,
  )}&description=${encodeURIComponent(description)}`;
