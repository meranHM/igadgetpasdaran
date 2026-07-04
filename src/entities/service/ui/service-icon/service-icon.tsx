import type { ServiceId } from "@entities/service/model/services";
import { serviceIconStyles } from "./service-icon-styles";

type ServiceIconProps = {
  type: ServiceId;
};

export function ServiceIcon({ type }: ServiceIconProps) {
  const commonProps = {
    viewBox: "0 0 32 32",
    "aria-hidden": true,
    focusable: false,
    className: serviceIconStyles.root,
  };

  if (type === "trade") {
    return (
      <svg {...commonProps}>
        <rect x="10" y="4" width="12" height="24" rx="3" />
        <path d="M13 8h6M14 24h4M5 12l3-3 3 3M27 20l-3 3-3-3M8 9v9m16-4v9" />
      </svg>
    );
  }

  if (type === "repair") {
    return (
      <svg {...commonProps}>
        <path d="m6 26 11-11M20 12l6-6M17 15l-3-3 6-7 6 1-1 6-8 3ZM5 22l5 5-3 2-4-4 2-3Z" />
      </svg>
    );
  }

  if (type === "software") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="6" width="22" height="20" rx="4" />
        <path d="m12 13-4 3 4 3m8-6 4 3-4 3m-5 3 3-12" />
      </svg>
    );
  }

  if (type === "accessories") {
    return (
      <svg {...commonProps}>
        <path d="M11 7v9a5 5 0 0 0 10 0V7M8 7h6m4 0h6M16 21v6m-4 0h8" />
      </svg>
    );
  }

  if (type === "consultation") {
    return (
      <svg {...commonProps}>
        <path d="M27 15a10 10 0 0 1-10.5 10L10 27l1.5-4.5A10 10 0 1 1 27 15Z" />
        <path d="M12 12a4 4 0 0 1 7.5 2c0 3-3.5 3-3.5 5m0 3h.01" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 16s4-7 12-7 12 7 12 7-4 7-12 7S4 16 4 16Z" />
      <circle cx="16" cy="16" r="3.5" />
      <path d="M16 4v2m0 20v2M5 7l2 2m18-2-2 2" />
    </svg>
  );
}
