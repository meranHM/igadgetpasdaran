"use client";

import { useId, useState } from "react";
import { cn } from "@shared/lib/cn";
import { phoneMemoriesStyles } from "./phone-memories-styles";

const eraKeys = ["keypad", "touch", "today"] as const;
type EraKey = (typeof eraKeys)[number];

type PhoneMemoriesProps = {
  label: string;
  hint: string;
  eras: Record<
    EraKey,
    { label: string; title: string; description: string; screen: string }
  >;
};

export function PhoneMemories({ label, hint, eras }: PhoneMemoriesProps) {
  const [era, setEra] = useState<EraKey>("keypad");
  const id = useId();
  const active = eras[era];

  return (
    <div className={phoneMemoriesStyles.root}>
      <div
        className={phoneMemoriesStyles.controls}
        role="group"
        aria-label={label}
      >
        {eraKeys.map((key) => (
          <button
            type="button"
            key={key}
            aria-pressed={era === key}
            aria-controls={id}
            className={phoneMemoriesStyles.control}
            onClick={() => setEra(key)}
          >
            {eras[key].label}
          </button>
        ))}
      </div>
      <div
        id={id}
        className={phoneMemoriesStyles.memory}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className={phoneMemoriesStyles.deviceStage} aria-hidden="true">
          <span className={phoneMemoriesStyles.orbit} />
          <span className={phoneMemoriesStyles.orbitDot} />
          <div
            className={cn(
              phoneMemoriesStyles.phone,
              era === "keypad"
                ? phoneMemoriesStyles.retroPhone
                : phoneMemoriesStyles[era],
            )}
            data-phone-era={era}
          >
            <span className={phoneMemoriesStyles.speaker} />
            <div
              className={cn(
                phoneMemoriesStyles.screen,
                era === "keypad"
                  ? phoneMemoriesStyles.retroScreen
                  : phoneMemoriesStyles.modernScreen,
              )}
            >
              <span className={phoneMemoriesStyles.signal}>
                <svg viewBox="0 0 32 12" className="w-6" focusable="false">
                  <path
                    d="M2 11V8m6 3V6m6 5V3m6 8V1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
                <span className={phoneMemoriesStyles.battery} />
              </span>
              <span className={phoneMemoriesStyles.screenText}>
                {active.screen}
              </span>
              {era === "keypad" ? (
                <svg viewBox="0 0 100 35" className="w-20" focusable="false">
                  <path
                    d="M10 25h30V10h25v15h20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeDasharray="5 2"
                  />
                  <rect x="84" y="6" width="5" height="5" fill="currentColor" />
                </svg>
              ) : (
                <div className={phoneMemoriesStyles.apps}>
                  {Array.from(
                    { length: era === "touch" ? 6 : 9 },
                    (_, index) => (
                      <span key={index} />
                    ),
                  )}
                </div>
              )}
            </div>
            {era === "keypad" ? (
              <div className={phoneMemoriesStyles.keypad}>
                {Array.from({ length: 12 }, (_, index) => (
                  <span key={index} />
                ))}
              </div>
            ) : (
              <span className={phoneMemoriesStyles.homeButton} />
            )}
          </div>
        </div>
        <div className={phoneMemoriesStyles.captions}>
          {eraKeys.map((key) => (
            <div
              key={key}
              className={cn(
                phoneMemoriesStyles.caption,
                era !== key && phoneMemoriesStyles.inactiveCaption,
              )}
              aria-hidden={era !== key || undefined}
            >
              <p className={phoneMemoriesStyles.title}>{eras[key].title}</p>
              <p className={phoneMemoriesStyles.description}>
                {eras[key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className={phoneMemoriesStyles.hint}>{hint}</p>
    </div>
  );
}
