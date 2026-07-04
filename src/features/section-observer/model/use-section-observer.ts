"use client";

import { useEffect, useState } from "react";
import { isRobotPose, type RobotPose } from "@entities/robot/model/types";

export function useSectionObserver(initialPose: RobotPose = "story") {
  const [activePose, setActivePose] = useState<RobotPose>(initialPose);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-robot-pose-zone]"),
    );

    if (!targets.length || !("IntersectionObserver" in window)) {
      return;
    }

    const visibleTargets = new Set<HTMLElement>();

    const chooseClosestTarget = () => {
      const viewportAnchor = window.innerHeight * 0.48;
      const closest = Array.from(visibleTargets).sort((first, second) => {
        const firstRect = first.getBoundingClientRect();
        const secondRect = second.getBoundingClientRect();
        const firstDistance = Math.abs(firstRect.top + firstRect.height / 2 - viewportAnchor);
        const secondDistance = Math.abs(secondRect.top + secondRect.height / 2 - viewportAnchor);
        return firstDistance - secondDistance;
      })[0];

      const nextPose = closest?.dataset.robotPoseZone;
      if (isRobotPose(nextPose)) {
        setActivePose((current) => (current === nextPose ? current : nextPose));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            visibleTargets.add(target);
          } else {
            visibleTargets.delete(target);
          }
        }
        chooseClosestTarget();
      },
      {
        rootMargin: "-28% 0px -28% 0px",
        threshold: [0, 0.15, 0.4],
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return activePose;
}
