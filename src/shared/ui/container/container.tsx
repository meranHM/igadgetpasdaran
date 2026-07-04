import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@shared/lib/cn";
import { containerClassName } from "./container-styles";

export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return <div className={cn(containerClassName, className)} {...props} />;
}
