import Link from "next/link";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? 36 : size === "lg" ? 60 : 48;
  const textSize =
    size === "sm"
      ? "text-xl"
      : size === "lg"
        ? "text-4xl"
        : "text-2xl";
  const subSize =
    size === "sm" ? "text-[9px]" : size === "lg" ? "text-sm" : "text-[10px]";

  return (
    <Link href="/" className="flex items-center gap-3 no-underline">
      {/* Power Button Icon */}
      <div
        style={{ width: iconSize, height: iconSize }}
        className="relative flex-shrink-0"
      >
        <svg
          viewBox="0 0 100 100"
          width={iconSize}
          height={iconSize}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle with gradient */}
          <defs>
            <radialGradient id="redGrad" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FF4444" />
              <stop offset="100%" stopColor="#AA0000" />
            </radialGradient>
            <radialGradient id="innerGrad" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#EE3333" />
              <stop offset="100%" stopColor="#990000" />
            </radialGradient>
          </defs>
          {/* Shadow */}
          <circle cx="52" cy="52" r="46" fill="rgba(0,0,0,0.15)" />
          {/* Main circle */}
          <circle cx="50" cy="50" r="46" fill="url(#redGrad)" />
          {/* Inner lighter circle */}
          <circle cx="50" cy="50" r="38" fill="url(#innerGrad)" />
          {/* White border ring */}
          <circle cx="50" cy="50" r="32" fill="none" stroke="white" strokeWidth="5" />
          {/* Power icon - vertical line */}
          <line
            x1="50"
            y1="22"
            x2="50"
            y2="42"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Power icon - arc */}
          <path
            d="M 33 35 A 22 22 0 1 0 67 35"
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className={`${subSize} text-gray-500 font-medium tracking-widest uppercase`}>
          라벨 스티커 인쇄전문
        </span>
        <span className={`${textSize} font-black text-gray-900 tracking-tight`}>
          바로인쇄소
        </span>
        <span className={`${subSize} text-baro-red font-semibold tracking-widest uppercase`}>
          ALL ABOUT LABEL PRINTING
        </span>
      </div>
    </Link>
  );
}
