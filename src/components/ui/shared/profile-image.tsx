import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { authCookie } from "@/lib/auth";

export default function ProfileImage() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    authCookie.set("token", "");
    navigate("/");
  };

  return (
    <DropdownMenu
      open={openDropDown}
      onOpenChange={() => setOpenDropDown(!openDropDown)}
    >
      <DropdownMenuTrigger onClick={() => setOpenDropDown(true)}>
        <img
          src="https://api.dicebear.com/9.x/thumbs/svg?seed=Janjiraga"
          alt="avatar"
          className="w-12 h-12 rounded-full border-2 border-j-green-dark"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link to={"/dashboard"}>Dasbor</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
