import { getTranslations } from "next-intl/server";
import { RobotCompanionClient } from "./robot-companion-client";

export async function RobotCompanion() {
  const t = await getTranslations("Robot");

  return (
    <RobotCompanionClient
      ariaLabel={t("ariaLabel")}
      labels={{
        story: t("companion.story"),
        services: t("companion.services"),
        repair: t("companion.repair"),
        trade: t("companion.trade"),
        contact: t("companion.contact"),
      }}
    />
  );
}
