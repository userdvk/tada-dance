import { Outlet } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";

export default function MainLayout() {
  return (
    <div className="app-background">
      <div className="app-container">
        <MainContainer>
          <Outlet />
        </MainContainer>
      </div>
    </div>
  );
}
