import RightSideCards from "../../components/features/RightSideCards/RightSideCards";

import { Search } from "../../components/ui/Search/Search";
import { Slider } from "../../components/ui/Search/Slider/Slider";
import cls from "./Dashboard.module.css";
import { CategoriesSlider } from "../../components/features/CategoriesSlider/CategoriesSlider";
import ContentWrapper from "../../components/layout/ContentWrapper/ContentWrapper";
import { useState } from "react";

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <>
      <div className={cls.wrap}>
        <Search />
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
      </div>

      <ContentWrapper title="Categories">
        <CategoriesSlider
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </ContentWrapper>
    </>
  );
}
