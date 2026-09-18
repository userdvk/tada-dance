import { useLocation } from "react-router-dom";
import Ellipse from "../../../assets/Ellipse.png";
import Notification from "../../../assets/Notification.png";
import { Search } from "../../ui/Search/Search";
import cls from "./ProfileHeader.module.css";
export default function ProfileHeader() {
  const location = useLocation();
  return (
    <div className={cls.wrapper}>
      <div className={cls.photo}>
        <img src={Ellipse} />
      </div>
      <div className={cls.GreetingText}>
        <p>Hi,Welcome Back,</p>
        <span>Name</span>
      </div>
      {location.pathname === "/dashboard" && <Search desktop />}
      <div className={cls.notification}>
        <img src={Notification} />
      </div>
    </div>
  );
}
