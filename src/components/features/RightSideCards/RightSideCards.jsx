import cls from "./RightSideCards.module.css";

export default function RightSideCards({ children }) {
  return <div className={cls.wrap}>{children}</div>;
}
