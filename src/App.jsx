import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./components/layout/MainLayout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  );
}
export default App;
