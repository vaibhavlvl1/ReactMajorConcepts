import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div>
        <h4>User Details</h4>
      </div>
      <div className="h-dvh w-full flex flex-col justify-start items-start gap-5 pt-8 text-white ">
        <Link className="hover:text-gray-400" to="/debouncing">
          Debouncing
        </Link>
        <Link className="hover:text-gray-400" to="customHook">
          CustomHooks
        </Link>
        <Link className="hover:text-gray-400" to="optimizations">
          Optimizations
        </Link>
        <Link className="hover:text-gray-400" to="reactwindow">
          React Window
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
