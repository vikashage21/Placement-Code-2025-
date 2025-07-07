import {
  Home,
  Search,
  Compass,
  MessageCircle,
  Heart,
  User,
  LogOut,
  MoreHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", icon: <Home size={24} />, path: "/" },
  { label: "Search", icon: <Search size={24} />, path: "/search" },
  { label: "Explore", icon: <Compass size={24} />, path: "/explore" },
  { label: "Messages", icon: <MessageCircle size={24} />, path: "/messages" },
  { label: "Notifications", icon: <Heart size={24} />, path: "/notifications" },
  { label: "Profile", icon: <User size={24} />, path: "/profile" },
  { label: "Logout", icon: <LogOut size={24} />, path: "/auth" },

];

function Sidebar() {
  return (
    <div className="h-screen w-[250px] border-r px-4 py-8 flex flex-col justify-between bg-white fixed   ">
      <div>
        <Link to="/">
          <h1 className="text-3xl font-instagram mb-8 text-black px-2">
            Instagram
          </h1>
        </Link>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.label}
              className="flex items-center gap-4 px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-800"
            >
              {item.icon}
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <button className="flex items-center gap-4 px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-800">
        <MoreHorizontal size={24} />
        <span className="text-lg">More</span>
      </button>
    </div>
  );
}

export default Sidebar;
