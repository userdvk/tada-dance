import cls from "./CategoriesSlider.module.css";
export function CategoriesSlider({ setActiveCategory, activeCategory }) {
  const categories = [
    { id: "all", name: "All" },
    { id: "childrenUnder 5", name: "children under 5" },
    { id: "duet", name: "Duet" },
    { id: "group", name: "Group" },
    { id: "surgeon2", name: "Street Dance" },
    { id: "dentist2", name: "Contemporary" },
  ];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.name);
  };
  return (
    <div className={cls.CategoriesSlider}>
      {categories.map((cat) => (
        <button
          className={`${cls.btn} ${activeCategory === cat.name ? cls.active : ""}`}
          key={cat.id}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

// Я должен вернуть вернуть выбраную категорию, что-бы потом осортировать!!!
