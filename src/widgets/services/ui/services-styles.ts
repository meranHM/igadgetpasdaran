import { cn } from "@shared/lib/cn";
import { pageSectionClassName } from "@shared/ui/styles";

export const servicesStyles = {
  root: cn(pageSectionClassName, "border-t border-line"),
  grid: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2",
  tradeCard: "sm:[grid-area:1/1]",
  repairCard: "sm:[grid-area:2/2]",
  softwareCard: "sm:[grid-area:1/2]",
  accessoriesCard: "sm:[grid-area:2/1]",
  consultationCard: "sm:[grid-area:3/1]",
  healthCheckCard: "sm:[grid-area:3/2]",
} as const;
