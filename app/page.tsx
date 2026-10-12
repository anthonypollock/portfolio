import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
import {
  education,
  experience,
  experienceIntro,
  profile,
  projectsIntro,
  skills,
  work,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <SiteHeader intro />
      <main>
        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Technical Skills</h2>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="card skill-card" key={skill.title}>
                <h3>
                  <Icon name={skill.icon} />
                  {skill.title}
                </h3>
                {"body" in skill ? <p>{skill.body}</p> : null}
                <ul className="pills">
                  {skill.pills.map((pill) => (
                    <li key={pill}>{pill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <div className="projects-intro">
            <h2 id="projects-heading">Featured Projects</h2>
            <p>{projectsIntro}</p>
          </div>
          <div className="project-grid">
            {work.map((item) => (
              <article className="card project-card" key={item.slug}>
                <div className="project-visual">
                  <img src={item.image} alt="" />
                </div>
                <div className="project-body">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <ul className="pills">
                    {item.pills.map((pill) => (
                      <li key={pill}>{pill}</li>
                    ))}
                  </ul>
                  <Link className="button" href={`/work/${item.slug}`}>
                    Read this work
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <div className="experience-intro">
            <h2 id="experience-heading">Professional Experience</h2>
            <p>{experienceIntro}</p>
          </div>
          <div className="experience-list">
            {experience.map((role) => (
              <article className="card experience-card" key={role.dates}>
                <div className="experience-top">
                  <h3>
                    <Icon name="briefcase" />
                    {role.title}
                  </h3>
                  <div className="experience-meta">
                    <p>
                      <Icon name="calendar" />
                      {role.dates}
                    </p>
                    {"place" in role ? (
                      <p>
                        <Icon name="map-pin" />
                        {role.place}
                      </p>
                    ) : null}
                  </div>
                </div>
                <p>{role.body}</p>
                <ul className="pills">
                  {role.pills.map((pill) => (
                    <li key={pill}>{pill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" aria-labelledby="education-heading">
          <div className="experience-intro">
            <h2 id="education-heading">Education</h2>
          </div>
          <article className="card education-card">
            <div className="experience-top">
              <div>
                <h3>{education.degree}</h3>
                <p>{education.school}</p>
              </div>
              <p className="education-years">{education.years}</p>
            </div>
          </article>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="experience-intro">
            <h2 id="contact-heading">Let&apos;s Work Together</h2>
            <p>
              Statistical programming in R and SAS for healthcare and study data.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-cards">
              <a className="card contact-card" href={`mailto:${profile.email}`}>
                <h3>
                  <Icon name="mail" />
                  Email
                </h3>
                <p>{profile.email}</p>
              </a>
              <a className="card contact-card" href="tel:+14708664099">
                <h3>
                  <Icon name="phone" />
                  Phone
                </h3>
                <p>{profile.phone}</p>
              </a>
              <div className="card contact-card">
                <h3>
                  <Icon name="map-pin" />
                  Location
                </h3>
                <p>{profile.location}</p>
              </div>
              <SocialLinks />
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
