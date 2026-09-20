import cls from "./SectionHeader.module.css";
export default function SectionHeader({ title, children }) {
  return (
    <>
      <div className={cls.SectionHeader}>
        <span className={cls.title}>{title}</span>
        <span className={cls.seeAll}>See All</span>
      </div>
      {children}
    </>
  );
}
