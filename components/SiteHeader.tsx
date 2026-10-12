import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { basePath } from "@/lib/basePath";
import { figures, profile } from "@/lib/content";

export function SiteHeader({ intro = false }: { intro?: boolean }) {
  if (!intro) {
    return (
      <header className="identity">
        <h1>{profile.name}</h1>
        <p>{profile.title}</p>
        <p>{profile.location}</p>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </header>
    );
  }

  return (
    <header className="hero">
      <div className="hero-copy">
        <h1>{profile.greeting}</h1>
        <p className="role">{profile.title}</p>
        <p className="intro">{profile.intro}</p>
        <p className="hero-actions">
          <Link className="button" href="/#projects">
            View my work
          </Link>
        </p>
        <p className="hero-links">
          <SocialLinks />
        </p>
      </div>
      <div className="portrait-wrap">
        <img
          className="portrait"
          src={`${basePath}/anthony-pollock.jpg`}
          alt="Anthony Pollock"
        />
        <p className="available">
          <span className="available-dot" aria-hidden="true" />
          Available for work
        </p>
      </div>
      <ul className="figures">
        {figures.map((figure) => (
          <li key={figure.label}>
            <strong>{figure.value}</strong>
            <span>{figure.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}
