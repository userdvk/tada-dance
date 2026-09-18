import { Outlet } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import LeftMenu from "../../features/LeftMenu/leftMenu";
import ProfileHeader from "../../features/ProfileHeader/ProfileHeader";

export default function MainLayout() {
  return (
    <div className="app-background">
      <div className="app-container">
        <MainContainer>
          <ProfileHeader />
          <Outlet />
          <LeftMenu />
        </MainContainer>
      </div>
    </div>
  );
}
