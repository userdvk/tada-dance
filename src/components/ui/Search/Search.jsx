import cls from "./Search.module.css";

export function Search({ setSerchQuery, desktop }) {
  const onChangeHandler = (e) => {
    e.preventDefault();
    setSerchQuery(e.target.value);
  };

  return (
    <div className={`${desktop ? cls.wrapperDesktop : cls.wrapper}`}>
      <svg
        className={`${cls.icon}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={onChangeHandler}
      />
    </div>
  );
}
