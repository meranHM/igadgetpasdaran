"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@shared/lib/cn";
import { ArrowIcon, MessageIcon } from "@shared/ui/icons";
import { conversationStarterStyles as styles } from "./conversation-starter-styles";

const topicIds = ["phone", "repair", "accessories", "other"] as const;
const feedbackIds = ["idle", "copying", "copied", "error"] as const;
type Feedback = (typeof feedbackIds)[number];

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

type ConversationStarterProps = {
  label: string;
  previewLabel: string;
  copy: string;
  methodsLink: string;
  noScript: string;
  topics: Record<(typeof topicIds)[number], { label: string; message: string }>;
  feedback: Record<Feedback, string>;
};

export function ConversationStarterClient({
  label,
  previewLabel,
  copy,
  methodsLink,
  noScript,
  topics,
  feedback,
}: ConversationStarterProps) {
  const [topic, setTopic] = useState<(typeof topicIds)[number]>("phone");
  const [status, setStatus] = useState<Feedback>("idle");
  const request = useRef(0);
  const ready = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const id = useId();

  async function copyMessage() {
    const currentRequest = ++request.current;
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(topics[topic].message);
      if (request.current === currentRequest) setStatus("copied");
    } catch {
      if (request.current === currentRequest) setStatus("error");
    }
  }

  return (
    <div>
      <fieldset className={styles.fieldset} disabled={!ready}>
        <legend className={styles.legend}>{label}</legend>
        <div className={styles.topics}>
          {topicIds.map((key) => (
            <label className={styles.topic} key={key}>
              <input
                className={styles.radio}
                type="radio"
                name={`${id}-topic`}
                value={key}
                checked={topic === key}
                aria-controls={`${id}-preview`}
                onChange={() => {
                  request.current += 1;
                  setTopic(key);
                  setStatus("idle");
                }}
              />
              <span>{topics[key].label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className={styles.preview}>
        <p className={styles.previewLabel}>{previewLabel}</p>
        <div
          id={`${id}-preview`}
          className={styles.stack}
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Every translation participates in sizing; only one is exposed. */}
          {topicIds.map((key) => (
            <p
              key={key}
              className={cn(
                styles.variant,
                styles.message,
                topic !== key && styles.inactive,
              )}
              aria-hidden={topic !== key || undefined}
            >
              {topics[key].message}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.copy}
          type="button"
          disabled={!ready || status === "copying"}
          onClick={copyMessage}
        >
          <MessageIcon />
          {copy}
        </button>
        <a className={styles.methodsLink} href="#contact-methods">
          {methodsLink}
          <ArrowIcon />
        </a>
      </div>
      <div className={cn(styles.stack, styles.feedback)}>
        {feedbackIds.map((key) => (
          <p
            key={key}
            className={cn(
              styles.variant,
              styles.feedbackText,
              status !== key && styles.inactive,
            )}
            aria-hidden={status !== key || undefined}
          >
            {feedback[key]}
          </p>
        ))}
      </div>
      <span className="sr-only" role="status" aria-atomic="true">
        {status === "idle" ? "" : feedback[status]}
      </span>
      <noscript>
        <p className={styles.noScript}>{noScript}</p>
      </noscript>
    </div>
  );
}
