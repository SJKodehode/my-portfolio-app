'use client';

import {useState} from 'react';
import {Card, CardBody, CardFooter} from '@heroui/card';
import {Tabs, Tab} from '@heroui/tabs';
import {Button} from '@heroui/button';
import {Chip} from '@heroui/chip';
import Image from 'next/image';
import {Github} from 'lucide-react';

type Props = {
  title: string;
  description: string;
  tags?: string[];
  imageSrc: string; // GitHub project preview image
  repoUrl?: string;
};

export default function ProjectCardWithTabs({
  title = 'ergosmart-2',
  description = 'ErgoSmart 2.0 – A comprehensive ergonomic workspace solution with modern design and advanced features.',
  tags = ['React', 'TypeScript', 'Tailwind CSS'],
  imageSrc,
  repoUrl,
}: Props) {
  const [tab, setTab] = useState<'preview' | 'details'>('preview');

  return (
    <Card
      radius="lg"
      shadow="md"
      className="relative w-full max-w-sm overflow-hidden"
    >
      {/* Tabs header */}
      <div className="absolute z-20 top-3 right-3">
        <Tabs
          aria-label="Project views"
          selectedKey={tab}
          onSelectionChange={(k) => setTab(k as typeof tab)}
          variant="bordered"
          size="sm"
          classNames={{
            tabList: 'backdrop-blur bg-white/20 dark:bg-black/40 dark:border-black/10 border-black/10 rounded-full p-1',
            cursor: 'rounded-full',
            tab: 'px-3 data-[selected=true]:font-semibold data-[selected=true]:bg-gray/20',
          }}
        >
          <Tab key="preview" title="Preview" />
          <Tab key="details" title="Details" />
        </Tabs>
      </div>

      {/* Body: same-size viewport for both tabs */}
      <CardBody className="p-0">
        <div className="relative w-full">
          {/* Fix a consistent aspect ratio so image and content match sizes */}
          <div className="aspect-[4/3] w-full">
            {/* PREVIEW */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${tab === 'preview' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
              {/* Next.js Image for performance; fills container */}
              <Image
                src={imageSrc}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover"
                priority={false}
              />
            </div>

            {/* DETAILS */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${tab === 'details' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
              <div className="h-full w-full p-5 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-foreground/80 text-sm leading-6">
                  {description}
                </p>
                {tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <Chip key={t} size="sm" variant="flat">
                        {t}
                      </Chip>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </CardBody>

      {/* Footer: blurred overlay only on image tab; regular footer on details */}
      
    </Card>
  );
}
