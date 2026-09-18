import RightSideCards from "../../components/features/RightSideCards/RightSideCards";
import { Slider } from "../../components/ui/Slider/Slider";
import cls from "./Dashboard.module.css";
import { CategoriesSlider } from "../../components/features/CategoriesSlider/CategoriesSlider";
import ContentWrapper from "../../components/layout/ContentWrapper/ContentWrapper";
import { useState } from "react";

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
      <main className={cls.wrap}>
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
      </main>

      <ContentWrapper title="Categories">
        <CategoriesSlider
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </ContentWrapper>
    </>
  );
}
