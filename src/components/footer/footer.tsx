'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';

const Footer = () => (
  <footer
    className={cn(
      'z-10 p-4 mx-4 lg:mx-8 min-w-[calc(100vw-32px)] lg:min-w-[calc(100vw-56px)] shadow-md rounded-lg bg-primary-foreground',
    )}
  >
    <div
      className={cn(
        'container flex flex-row items-center justify-center gap-4 mx-auto',
        'md:flex-row',
      )}
    >
      <div className={cn('flex flex-col gap-2')}>
        <p
          className={cn(
            'text-center text-sm leading-loose text-muted-foreground',
            'md:text-left',
          )}
        >
          開発者:{' 栗山有紀'}
        </p>
        <Link
          href="https://github.com/kkyy0720/PaintFrame"
          target="_blank"
          rel="noreferrer"
          className={cn(
            'text-center text-xs leading-loose text-muted-foreground',
            'md:text-left',
            'hover:underline hover:underline-offset-4',
          )}
        >
          GitHub で最近の更新を確認する
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
