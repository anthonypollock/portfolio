import { Icon } from "@/components/Icon";
import { socials } from "@/lib/content";

export function SocialLinks() {
  return (
    <span className="socials">
      {socials.map((item) => (
        <a
          key={item.label}
          className="icon-link"
          href={item.href}
          aria-label={item.label}
          {...(item.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon name={item.icon} />
        </a>
      ))}
    </span>
  );
}
