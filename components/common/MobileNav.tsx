'use client'

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

interface DropdownNavProps {
  navigation?: {
    name: string;
    url: string;
  }[]
}

const DropdownNav:React.FC<DropdownNavProps> = ({
  navigation
}) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-md w-[25px] h-[25px] text-white inline-flex items-center justify-center"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon className="dark:invert w-full h-full text-black "/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] w-screen min-h-screen text-black bg-white dark:invert p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Separator className="group h-[1px] bg-violet6 m-[5px]"/>
          {
            navigation?.map((nav) => (
              <DropdownMenu.Item asChild key={nav.url} className="group font-bold p-4 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                <Link href={nav.url}>{nav.name}</Link>
              </DropdownMenu.Item>
            ))
          }
          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]"/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownNav;