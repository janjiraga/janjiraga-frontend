import { Link } from "react-router-dom";
import { Button } from "../button";
import { Input } from "../input";
import Logo from "../../../assets/logo.png";

export function SiteNavigation() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="logo main bareng" className="h-10 w-10 mr-3" />
        <h1 className="text-2xl font-bold">Janjiraga</h1>
      </div>

      <div className="ml-6 ">
        <Link to="/" className="text-xl text-gray-700">
          Main Bareng
        </Link>
      </div>

      <div className="flex-grow mx-6">
        <Input type="text" name="searchevent" placeholder="Cari event mabar..."></Input>
      </div>

      <div className="flex items-center">
        <Link to="/login" className="mr-4">
          <Button variant="outline">Masuk</Button>
        </Link>
        <Link to="/register">
          <Button variant="outline">Daftar</Button>
        </Link>
      </div>
    </nav>
  );
}
