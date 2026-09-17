import { Outlet } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import { LeftMenu } from "../../features/LeftMenu/LeftMenu";

export default function MainLayout() {
  return (
    <div className="app-background">
      <div className="app-container">
        <MainContainer>
          <Outlet />
          <LeftMenu />
        </MainContainer>
      </div>
    </div>
  );
}
