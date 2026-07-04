import type { RobotPose } from "@entities/robot/model/types";

type RobotMascotProps = {
  pose: RobotPose;
  ariaLabel?: string;
  decorative?: boolean;
  className?: string;
};

export function RobotMascot({
  pose,
  ariaLabel,
  decorative = false,
  className = "",
}: RobotMascotProps) {
  return (
    <svg
      className={`robot-mascot block w-full overflow-visible ${className}`}
      data-pose={pose}
      viewBox="0 0 280 320"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : ariaLabel}
      aria-hidden={decorative || undefined}
      focusable="false"
    >
      <g className="robot-mascot__float">
        <ellipse className="robot-mascot__shadow" cx="140" cy="294" rx="76" ry="12" />

        <g className="robot-mascot__body">
          <path className="robot-mascot__antenna" d="M140 39V22" />
          <circle className="robot-mascot__antenna-tip" cx="140" cy="17" r="7" />

          <g className="robot-mascot__head">
            <rect x="48" y="40" width="184" height="126" rx="27" />
            <path className="robot-mascot__head-highlight" d="M72 59h102" />
            <rect className="robot-mascot__eye robot-mascot__eye--left" x="89" y="73" width="24" height="58" rx="12" />
            <rect className="robot-mascot__eye robot-mascot__eye--right" x="167" y="73" width="24" height="58" rx="12" />
          </g>

          <rect className="robot-mascot__neck" x="124" y="160" width="32" height="25" rx="8" />
          <path className="robot-mascot__torso" d="M91 184c0-9 7-16 16-16h66c9 0 16 7 16 16v55c0 12-10 22-22 22h-54c-12 0-22-10-22-22v-55Z" />
          <path className="robot-mascot__chest-line" d="M116 199h48" />
          <circle className="robot-mascot__chest-dot" cx="140" cy="224" r="7" />

          <g className="robot-mascot__arm robot-mascot__arm--left">
            <path d="M97 187C73 187 59 200 57 225l-1 17" />
            <circle cx="55" cy="253" r="13" />
          </g>

          <g className="robot-mascot__arm robot-mascot__arm--right">
            <path d="M183 187c24 0 38 13 40 38l1 17" />
            <circle cx="225" cy="253" r="13" />

            <g className="robot-mascot__tool robot-mascot__screwdriver">
              <rect x="221" y="254" width="8" height="35" rx="4" />
              <path d="m225 289-5 13h10l-5-13Z" />
            </g>

            <g className="robot-mascot__tool robot-mascot__phone">
              <rect x="207" y="225" width="36" height="57" rx="8" />
              <path d="M219 232h12M220 273h10" />
            </g>
          </g>

          <g className="robot-mascot__leg robot-mascot__leg--left">
            <path d="M117 253v27l-19 13" />
            <path d="M96 293h-20" />
          </g>
          <g className="robot-mascot__leg robot-mascot__leg--right">
            <path d="M163 253v27l19 13" />
            <path d="M184 293h20" />
          </g>
        </g>
      </g>
    </svg>
  );
}
