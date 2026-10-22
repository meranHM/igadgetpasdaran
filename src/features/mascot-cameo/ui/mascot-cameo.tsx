"use client";

import { useEffect, useState } from "react";
import { RobotMascot } from "@entities/robot/ui/robot-mascot";
import { cn } from "@shared/lib/cn";
import { mascotCameoStyles } from "./mascot-cameo-styles";

const appearances = [
  { pose: "story", position: "start" },
  { pose: "hero", position: "end" },
  { pose: "trade", position: "middle" },
] as const;

type MascotCameoProps = {
  label: string;
  messages: [string, string, string];
  contained?: boolean;
};

export function MascotCameo({
  label,
  messages,
  contained = false,
}: MascotCameoProps) {
  const [appearance, setAppearance] = useState(0);

  useEffect(() => {
    // Choose after hydration so the server-rendered page stays static and stable.
    const frame = requestAnimationFrame(() => {
      setAppearance(Math.floor(Math.random() * appearances.length));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const { pose, position } = appearances[appearance];

  if (contained) {
    return (
      <aside
        aria-label={label}
        className={mascotCameoStyles.contained}
        data-mascot-cameo={position}
      >
        <div
          className={cn(
            mascotCameoStyles.figure,
            mascotCameoStyles.alignment[position],
          )}
        >
          <div className={mascotCameoStyles.messages}>
            {messages.map((message, index) => (
              <p
                key={index}
                aria-hidden={index !== appearance || undefined}
                className={cn(
                  mascotCameoStyles.message,
                  mascotCameoStyles.caption,
                  index !== appearance && "invisible",
                )}
              >
                {message}
              </p>
            ))}
          </div>
          <RobotMascot
            pose={pose}
            decorative
            className={mascotCameoStyles.robot}
          />
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label={label}
      className={cn(mascotCameoStyles.root, mascotCameoStyles[position])}
      data-mascot-cameo={position}
    >
      <p className={mascotCameoStyles.message}>{messages[appearance]}</p>
      <RobotMascot pose={pose} decorative className={mascotCameoStyles.robot} />
    </aside>
  );
}
