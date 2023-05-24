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
  const activeStyle = segment === slug ? 'font-bold opacity-100 ' : '';

  return (
    <Link href={`/about/${slug}`} className={`${className} ${activeStyle} text-xl opacity-50 hover:opacity-100 hover:scale-105 hover:translate-x-2 hover:font-bold transition-all `}>
      {title}
    </Link>
  )
}

export default StyledNav