import { getTranslations } from "next-intl/server";
import { serviceIds } from "@entities/service/model/services";
import { ServiceCard } from "@entities/service/ui/service-card";
import type { RobotPose } from "@entities/robot/model/types";
import { SectionHeading } from "@shared/ui/section-heading";
import { pageSectionClassName } from "@shared/ui/styles";
import { cn } from "@shared/lib/cn";

const robotPoseByService: Record<(typeof serviceIds)[number], RobotPose> = {
  trade: "trade",
  repair: "repair",
  software: "services",
  accessories: "services",
  consultation: "services",
  healthCheck: "services",
};

const placementByService: Record<(typeof serviceIds)[number], string> = {
  trade: "sm:[grid-area:1/1]",
  repair: "sm:[grid-area:2/2]",
  software: "sm:[grid-area:1/2]",
  accessories: "sm:[grid-area:2/1]",
  consultation: "sm:[grid-area:3/1]",
  healthCheck: "sm:[grid-area:3/2]",
};

export async function Services() {
  const t = await getTranslations("Services");

  return (
    <section
      id="services"
      className={cn(pageSectionClassName, "border-t border-line")}
    >
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {serviceIds.map((id) => (
          <ServiceCard
            key={id}
            id={id}
            number={t(`cards.${id}.number`)}
            title={t(`cards.${id}.title`)}
            description={t(`cards.${id}.description`)}
            robotPose={robotPoseByService[id]}
            className={placementByService[id]}
          />
        ))}
      </div>
    </section>
  );
}
