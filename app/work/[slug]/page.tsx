import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { SiteHeader } from "@/components/SiteHeader";
import { getWork, work } from "@/lib/content";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) {
    return { title: "Work" };
  }
  return { title: `${item.title} · Anthony Pollock` };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <article className="story detail">
          <p>
            <Link href="/#projects">Back to projects</Link>
          </p>
          <h2>
            <Icon name={item.icon} />
            {item.title}
          </h2>
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </main>
    </>
  );
}
