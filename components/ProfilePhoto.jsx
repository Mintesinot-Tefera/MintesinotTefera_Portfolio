"use client";

import { useState } from "react";

/**
 * Shows the portrait at /public/profile.jpg.
 * If that file is missing (or fails to load), it gracefully falls back to a
 * clean "MT" initials placeholder so the layout never looks broken.
 *
 * To use your own photo: save it as  public/profile.jpg
 */
export default function ProfilePhoto({ src = "/profile.jpg", alt, initials = "MT" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
        <div className="text-center">
          <span className="block text-5xl font-semibold text-mute">
            {initials}
          </span>
          <span className="mt-2 block text-[11px] uppercase tracking-[0.25em] text-mute">
            Add public/profile.jpg
          </span>
        </div>
      </div>
    );
  }

  // Plain <img> (not next/image) keeps this robust to any file format the user drops in.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}
