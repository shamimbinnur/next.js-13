'use client'

import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link'

interface StyledNavProps {
  slug: string;
  title: string;
  className?: string;
}

const StyledNav: React.FC<StyledNavProps> = ({
  slug,
  title,
  className
}) => {
  const segment = useSelectedLayoutSegment();
  const activeStyle = segment === slug ? 'font-bold text-4xl text-black dark:invert' : '';

  return (
    <Link href={`/about/${slug}`} className={`${className} ${activeStyle} duration-700 transition-all`}>
      {title}
    </Link>
  )
}

export default StyledNav