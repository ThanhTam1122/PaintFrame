import { ImageViewer } from '@/components/atoms/image-viewer';
import { BASE_URL } from '@/data/app';

type Props = {
  title: string;
  content: string;
  img: string;
};

async function getPainting() {
  const res = await fetch(`${BASE_URL}/api/painting`, {
    cache: 'no-store',
  });
  const projects = await res.json();

  return projects as Props;
}

export default async function Home() {
  const { title, content, img } = await getPainting();

  return (
    <div className="flex flex-col gap-y-2 p-4 lg:p-8 h-full items-center">
      <ImageViewer img={img} />
      <h1 className="font-bold tracking-tight text-muted-foreground">
        {title}
      </h1>
      <h6 className="tracking-tight text-muted-foreground flex-1 overflow-y-auto">
        {content}
      </h6>
    </div>
  );
}
