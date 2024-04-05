'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MapInteractionCSS } from 'react-map-interaction';

const MIN_SCALE = Number(process.env.NEXT_PUBLIC_VIEW_MIN_SCALE ?? 0.5);
const MAX_SCALE = Number(process.env.NEXT_PUBLIC_VIEW_MAX_SCALE ?? 5);

type Props = {
  scale?: number;
  translation?: { x: number; y: number };
  img: string;
  alt?: string;
  className?: string;
};

const ImageViewer: React.FC<Props> = React.forwardRef(
  (
    {
      scale = 1,
      translation = { x: 0, y: 0 },
      img,
      alt = '写真',
      className,
      ...props
    },
    ref,
  ) => (
    <section className="sticky border-muted-foreground border-2 max-w-[500px]">
      <MapInteractionCSS
        ref={ref}
        defaultScale={1}
        defaultTranslation={{ x: 0, y: 0 }}
        scale={scale}
        minScale={MIN_SCALE}
        maxScale={MAX_SCALE}
        translation={translation}
        className={cn('items-center justify-center')}
        {...props}
      >
        <Image
          src={img}
          alt={alt}
          width={1024}
          height={768}
          priority
          className="pointer-events-none"
        />
      </MapInteractionCSS>
    </section>
  ),
);

ImageViewer.displayName = 'ImageViewer';

export { ImageViewer };
