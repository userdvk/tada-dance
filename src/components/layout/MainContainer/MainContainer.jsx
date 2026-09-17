import cls from "./MainContainer.module.css";

export default function MainContainer({ children }) {
  return <div className={cls.MainContainer}>{children}</div>;
}
