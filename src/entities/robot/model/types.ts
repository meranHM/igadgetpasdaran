export const robotPoses = [
  "hero",
  "story",
  "services",
  "repair",
  "trade",
  "contact",
] as const;

export type RobotPose = (typeof robotPoses)[number];

export function isRobotPose(value: string | undefined): value is RobotPose {
  return robotPoses.includes(value as RobotPose);
}
