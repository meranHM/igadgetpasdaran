import type { RobotPose } from "@entities/robot/model/types";
import type { ServiceId } from "@entities/service/model/services";
import { ServiceIcon } from "@entities/service/ui/service-icon";
import { cn } from "@shared/lib/cn";

type ServiceCardProps = {
  id: ServiceId;
  title: string;
  description: string;
  number: string;
  robotPose: RobotPose;
  className?: string;
};

export function ServiceCard({
  id,
  title,
  description,
  number,
  robotPose,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "relative min-h-[17.8125rem] overflow-hidden rounded-3xl border border-line bg-surface p-7 transition-[transform,box-shadow,border-color] duration-220 after:absolute after:-end-12 after:-bottom-[3.875rem] after:size-32.5 after:rounded-full after:border-[1.375rem] after:border-accent/[0.055] after:content-[''] after:transition-transform after:duration-300 hover:-translate-y-1.25 hover:border-accent/20 hover:shadow-card hover:after:scale-112 max-sm:min-h-62.5 max-sm:p-6",
        className,
      )}
      data-robot-pose-zone={robotPose}
    >
      <div className="flex items-start justify-between">
        <span className="grid size-14 place-items-center rounded-[1.0625rem] bg-accent-soft text-accent">
          <ServiceIcon type={id} />
        </span>
        <span
          className="text-xs font-black tracking-[0.08em] text-[#d2cec6]"
          aria-hidden="true"
        >
          {number}
        </span>
      </div>
      <h3 className="mt-6.75 text-[1.22rem] leading-[1.4] font-black">
        {title}
      </h3>
      <p className="relative z-1 mt-3.5 text-[0.88rem] leading-[1.95] text-muted">
        {description}
      </p>
    </article>
  );
}
