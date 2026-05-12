import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <section className="w-full h-dvh bg-black flex">
      <div className="w-60 bg-gray-900 h-full">
        <Sidebar />
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </section>
  );
}

export default Layout;
