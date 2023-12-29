import { IconType } from "react-icons/lib";

interface InfoCardProps {
  icon: IconType;
  title: string;
  subtitle: string;
}

export default function InfoCard({
  icon: Icon,
  title,
  subtitle,
}: InfoCardProps) {
  return (
    <div className="flex items-center pt-3 pr-6 pl-6 pb-3 gap-3 shadow-3xl bg-white rounded-lg max-w-xs">
      <Icon size="1.5rem" color="#451E12" />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-md">{subtitle}</p>
      </div>
    </div>
  );
}
