"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { type ReactNode } from 'react';

const NavLinks = ({href,children}:{href :string ; children : ReactNode}) => {
    const pathName = usePathname();
    const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href);


    return (
        <Link href={href} className={`${isActive ? "text-primary" : ""}`}>
        {children}

        </Link>
    );
};

export default NavLinks;