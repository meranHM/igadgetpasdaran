import type { RobotPose } from "@entities/robot/model/types";
import type { ServiceId } from "@entities/service/model/services";
import { ServiceIcon } from "@entities/service/ui/service-icon";
import { cn } from "@shared/lib/cn";
import { serviceCardStyles } from "./service-card-styles";

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
        serviceCardStyles.root,
        className,
      )}
      data-robot-pose-zone={robotPose}
    >
      <div className={serviceCardStyles.header}>
        <span className={serviceCardStyles.icon}>
          <ServiceIcon type={id} />
        </span>
        <span
          className={serviceCardStyles.number}
          aria-hidden="true"
        >
          {number}
        </span>
      </div>
      <h3 className={serviceCardStyles.title}>
        {title}
      </h3>
      <p className={serviceCardStyles.description}>
        {description}
      </p>
    </article>
  );
}
