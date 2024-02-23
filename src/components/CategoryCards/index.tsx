import { Card } from "./Card";

export function CategoryCards() {
  return (
    <div className="w-full max-w-1380 mr-auto ml-auto">
      <ul className="w-full flex items-center md:justify-around pl-4 pr-4 pb-4 gap-2 md:gap-4 -mt-4 md:-mt-14 relative overflow-x-scroll overflow-y-hidden">
        <Card text="Laços" />
        <Card text="Básicos" />
        <Card text="Faixinhas RN" />
        <Card text="Tiaras" />
        <Card text="Aramados" />
      </ul>
    </div>
  );
}
