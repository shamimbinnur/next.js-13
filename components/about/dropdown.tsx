'use client'

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { aboutUs } from '@/src/contents/about';

const Dropdown:React.FC = () => {

  const slugs = aboutUs.sections.map((section) => (
    {
      title: section.title,
      slug: section.slug
    }
  ))

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-md h-[25px] w-full border-black dark:border-white py-4 mb-14 border text-white inline-flex items-center justify-center"
          aria-label="Customise options"
        >
          <span>About us</span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] w-screen min-h-screen text-black bg-white dark:invert p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Separator className="group h-[1px] bg-violet6 m-[5px]"/>
          {
            slugs?.map(({ slug, title}) => (
              <DropdownMenu.Item asChild key={slug} className="group font-bold p-4 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                <Link href={`/about/${slug}`}>{title}</Link>
              </DropdownMenu.Item>
            ))
          }

          {/* Intentional invalid slug */}
          <DropdownMenu.Item asChild key="boomm" className="group font-bold p-4 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <Link href="/about/boom">Not Found*</Link>
          </DropdownMenu.Item>
          
          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]"/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;