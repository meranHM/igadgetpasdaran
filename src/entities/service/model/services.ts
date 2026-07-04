export const serviceIds = [
  "trade",
  "repair",
  "software",
  "accessories",
  "consultation",
  "healthCheck",
] as const;

export type ServiceId = (typeof serviceIds)[number];
