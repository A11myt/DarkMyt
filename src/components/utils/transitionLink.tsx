"use client";
import React, { useEffect, useState } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) return;
    e.preventDefault();
    const content = document.querySelector(".content");
    content?.classList.add("page-unmount");
    await sleep(500);
    router.push(href);
  };

  return (
    <Link
      onClick={handleTransition}
      className={className}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
