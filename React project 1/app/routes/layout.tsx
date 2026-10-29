import { Outlet } from "react-router";
import Navbar from "../../src/components/Navbar";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <Outlet />
    </div>
  );
}
