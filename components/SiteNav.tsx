import Link from "next/link";
import { profile } from "@/lib/content";

const links = [
  { href: "/#skills", label: "Technical Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <div className="topbar">
      <Link className="brand" href="/">
        {profile.name}
      </Link>
      <nav aria-label="Page">
        <Link href="/">Home</Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
