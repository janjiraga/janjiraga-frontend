import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { useNavigate } from "react-router-dom";
import { authCookie } from "@/lib/auth";
import { Avatar, AvatarImage, AvatarFallback } from "../avatar";

export default function ProfileImage() {
  const userProfile = JSON.parse(localStorage.getItem("userProfile")!);
  const [openDropDown, setOpenDropDown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    authCookie.set("token", "");
    navigate("/login");
  };

  return (
    <DropdownMenu
      open={openDropDown}
      onOpenChange={() => setOpenDropDown(!openDropDown)}
    >
      <DropdownMenuTrigger onClick={() => setOpenDropDown(true)}>
        <Avatar className="border-2 border-j-green-dark">
          <AvatarImage
            src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${userProfile?.username}`}
          />
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("/dashboard")}>
          Dasbor
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
