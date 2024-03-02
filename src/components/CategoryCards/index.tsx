import "../../styles/scrollbar.css";

import { Card } from "./Card";
import { categoryData } from "@/utils/categoryData";

export function CategoryCards() {
  return (
    <section className="w-full max-w-1380 mr-auto ml-auto">
      <ul className="w-full flex items-center md:justify-around px-4 pb-4 gap-2 md:gap-4 -mt-1 md:-mt-6 relative overflow-x-scroll overflow-y-hidden md:overflow-hidden custom-scrollbar">
        {categoryData.map((category) => (
          <Card.Container key={category.id}>
            <Card.Image />
            <Card.Text text={category.name} />
          </Card.Container>
        ))}
      </ul>
    </section>
  );
}
