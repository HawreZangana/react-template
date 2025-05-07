import { Link, useLocation } from "react-router";

type MenuItem = {
    name: string,
    path: string,
    icon: string
};

const Sidebar = () => {
    const location = useLocation();

    // add new menu items here, don't forget to register the path in main.tsx:
    const menuItems: MenuItem[] = [
        {name: "Home", path: "/", icon: "home"},
        {name: "Assignments", path: "/assignments", icon: "task"},
        {name: "Groups", path: "/groups", icon: "groups"},
        {name: "Students", path: "/students", icon: "child_care"},
    ];

  return (
    <ul className="h-screen menu menu-lg bg-base-300 w-full p-2 rounded-box">
        {menuItems.map((m, _) => <li><Link to={m.path} className={m.path == location.pathname ? "tooltip tooltip-right menu-active" : "tooltip tooltip-right"} data-tip={m.name}><span className="material-icons">{m.icon}</span>{m.name}</Link></li>)}
    </ul>
  )
}

export default Sidebar