import Link from "next/link";

import { GithubIcon, LinkedinIcon, XIcon } from "@/components/social-icons";
import { Wordmark } from "@/components/wordmark";
import { footerColumns, links, site, type NavLink } from "@/content/site";

function LinkColumn({ title, items }: { title: string; items: NavLink[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="text-muted-foreground space-y-2 text-sm">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <li key={item.href}>
              {external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Wordmark />
            <p className="text-muted-foreground text-sm">
              {site.footerTagline}
            </p>
            <p className="text-muted-foreground text-xs">{site.disclaimer}</p>
          </div>
          <LinkColumn title="Product" items={footerColumns.product} />
          <LinkColumn
            title="From the StellarTools team"
            items={footerColumns.stellartools}
          />
          <LinkColumn title="Contact" items={footerColumns.contact} />
        </div>

        <div className="text-muted-foreground mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Built on Next.js, deployed
            on Vercel.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="hover:text-foreground"
            >
              <XIcon className="size-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
