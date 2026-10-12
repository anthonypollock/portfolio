"use client";

import { FormEvent } from "react";
import { Icon } from "@/components/Icon";
import { profile } from "@/lib/content";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form
      className="card contact-form"
      action={`mailto:${profile.email}`}
      method="post"
      encType="text/plain"
      onSubmit={onSubmit}
    >
      <h3>Send a Message</h3>
      <div className="form-row">
        <input name="name" required autoComplete="name" placeholder="Your name" aria-label="Your name" />
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          aria-label="Your email"
        />
      </div>
      <input name="subject" required placeholder="Subject" aria-label="Subject" />
      <textarea name="message" required rows={5} placeholder="Your message" aria-label="Your message" />
      <button className="button" type="submit">
        <Icon name="send" />
        Send Message
      </button>
    </form>
  );
}
