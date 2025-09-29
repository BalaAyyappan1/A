import { Outlet } from "react-router-dom";
import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Navbar";
import Topbar from "../Navigation/Topbar";


function Layout() {
  return (
    <div className="relative">
          <Topbar />
      <div className="w-full top-20 flex justify-between items-center">
      
        <Navbar />
      </div>

      {/* Render children */}
      <div> 
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;