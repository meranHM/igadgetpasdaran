import { getTranslations } from "next-intl/server";
import { serviceIds } from "@entities/service/model/services";
import { ServiceCard } from "@entities/service/ui/service-card";
import type { RobotPose } from "@entities/robot/model/types";
import { SectionHeading } from "@shared/ui/section-heading";
import { servicesStyles } from "./services-styles";

const robotPoseByService: Record<(typeof serviceIds)[number], RobotPose> = {
  trade: "trade",
  repair: "repair",
  software: "services",
  accessories: "services",
  consultation: "services",
  healthCheck: "services",
};

const placementByService: Record<(typeof serviceIds)[number], string> = {
  trade: servicesStyles.tradeCard,
  repair: servicesStyles.repairCard,
  software: servicesStyles.softwareCard,
  accessories: servicesStyles.accessoriesCard,
  consultation: servicesStyles.consultationCard,
  healthCheck: servicesStyles.healthCheckCard,
};

export async function Services() {
  const t = await getTranslations("Services");

  return (
    <section
      id="services"
      className={servicesStyles.root}
    >
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <div className={servicesStyles.grid}>
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
