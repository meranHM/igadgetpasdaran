import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@shared/lib/cn";

export const containerClassName =
  "mx-auto w-[calc(100%_-_2.5rem)] max-w-[76.25rem] max-sm:w-[calc(100%_-_1.75rem)]";

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn(containerClassName, className)} {...props} />;
}
