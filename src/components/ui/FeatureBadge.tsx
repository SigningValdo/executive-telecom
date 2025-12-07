import { ReactNode } from "react";

interface FeatureBadgeProps {
  icon: ReactNode;
  label: string;
}

export default function FeatureBadge({ icon, label }: FeatureBadgeProps) {
  return (
    <div className="flex items-center gap-4">
      <div>{icon}</div>
      <span className="text-xs md:text-lg lg:text-2xl">{label}</span>
    </div>
  );
}
