"use client";

import type { RobotPose } from "@entities/robot/model/types";
import { RobotMascot } from "@entities/robot/ui/robot-mascot";
import { useSectionObserver } from "@features/section-observer/model/use-section-observer";
import { robotCompanionStyles } from "./robot-companion-styles";

type CompanionPose = Exclude<RobotPose, "hero">;

type RobotCompanionClientProps = {
  ariaLabel: string;
  labels: Record<CompanionPose, string>;
};

export function RobotCompanionClient({
  ariaLabel,
  labels,
}: RobotCompanionClientProps) {
  const observedPose = useSectionObserver("story");
  const pose: CompanionPose = observedPose === "hero" ? "story" : observedPose;

  return (
    <aside
      className={robotCompanionStyles.root}
      aria-label={ariaLabel}
    >
      <div className={robotCompanionStyles.message}>
        {labels[pose]}
      </div>
      <RobotMascot
        pose={pose}
        decorative
        className={robotCompanionStyles.robot}
      />
    </aside>
  );
}
