import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      Home
      <NavLink to={"/dashboard"}>DashBoard</NavLink>
    </div>
  );
}
