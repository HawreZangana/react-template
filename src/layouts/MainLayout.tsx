import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

function MainLayout() {

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="h-3/48">
        <TopBar/>
      </div>
      <div className="flex flex-row h-45/48">
        <div className="flex flex-col w-3/24">
          <Sidebar/>
        </div>
        <div className="flex flex-col justify-around items-center w-21/24">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
