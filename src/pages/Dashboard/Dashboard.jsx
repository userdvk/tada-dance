import RightSideCards from "../../components/features/RightSideCards/RightSideCards";
import { Slider } from "../../components/ui/Slider/Slider";
import cls from "./Dashboard.module.css";
import { CategoriesSlider } from "../../components/features/CategoriesSlider/CategoriesSlider";
import SectionHeader from "../../components/ui/SectionHeader/SectionHeader";
import { useState } from "react";

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
      <section>
        <Slider />
        <div className={cls.sidewrap}>
          <RightSideCards>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            consequatur, aliquam voluptatibus quo eaque voluptates, excepturi
            alias ex nostrum molestiae quisquam. Veniam expedita distinctio
            nostrum architecto, necessitatibus placeat doloribus in.
          </RightSideCards>

          <RightSideCards>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            consequatur, aliquam voluptatibus quo eaque voluptates, excepturi
            alias ex nostrum molestiae quisquam. Veniam expedita distinctio
            nostrum architecto, necessitatibus placeat doloribus in.
          </RightSideCards>
        </div>
      </section>

      <SectionHeader title="Categories">
        <CategoriesSlider
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </SectionHeader>

      <SectionHeader title="Members"></SectionHeader>
    </>
  );
}
