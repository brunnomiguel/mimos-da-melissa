import Link from "next/link";
import { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link className="text-base font-medium hover:opacity-80" href={href}>
      {children}
    </Link>
  );
}
