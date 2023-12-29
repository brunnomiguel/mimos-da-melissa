import { IconType } from "react-icons/lib";

interface CardMenuProps {
  icon: IconType;
  text: string;
}

export default function CardMenu({ icon: Icon, text }: CardMenuProps) {
  return (
    <div
      className={`flex w-full items-center gap-4 p-2 border-b border-solid border-bb-color rounded-xl`}
    >
      <div>
        <Icon size="2rem" color="#451E12" />
      </div>
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
}
