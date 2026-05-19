"use client";

import { useEffect, useState } from "react";

type Announcement = {
  id: string;
  text: string;
  href: string | null;
  backgroundColor: string;
  textColor: string;
};

const DEFAULT_ENDPOINT = "https://app.aporto.tech/api/hello-bar";

export default function HelloBar() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const endpoint = process.env.NEXT_PUBLIC_HELLO_BAR_ENDPOINT || DEFAULT_ENDPOINT;
    fetch(endpoint, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data?.success && Array.isArray(data.announcements)) {
          setItems(data.announcements);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  const active = items[index % items.length];
  const content = (
    <span key={active.id} className="hello-bar-message">
      <span className="hello-bar-text">{active.text}</span>
      {active.href && <span className="hello-bar-cta">Learn more</span>}
    </span>
  );

  return (
    <div
      className="hello-bar"
      style={{ backgroundColor: active.backgroundColor, color: active.textColor }}
    >
      {active.href ? (
        <a className="hello-bar-link" href={active.href}>
          {content}
        </a>
      ) : (
        <div className="hello-bar-link">{content}</div>
      )}
    </div>
  );
}
