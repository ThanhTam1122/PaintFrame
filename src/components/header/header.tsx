'use client';

import { cn } from '@/lib/utils';

import ThemeSwitch from '../theme-switch';

const Header = () => (
  <header className={cn('sticky top-0 z-50 h-16 w-full bg-muted-foreground')}>
    <div className={cn('container h-full')}>
      <div className={cn('flex h-full items-center justify-end')}>
        <ThemeSwitch />
      </div>
    </div>
  </header>
);

export default Header;
