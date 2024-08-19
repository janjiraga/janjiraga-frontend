import { Link } from "react-router-dom";
import { Button } from "../button";
import { Input } from "../input";
import Logo from "../../../assets/logo.png";

export function SiteNavigation() {
  return (
    <div className="border-b border-b-gray-light fixed top-0 w-full z-10 bg-white">
      <nav className="p-4 flex justify-between items-center xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <div className="flex items-center">
          <img src={Logo} alt="logo main bareng" className="h-10 w-10 mr-3" />
          <Link to="/" className="text-2xl font-bold">
            Janjiraga
          </Link>
        </div>

        <div className="ml-6 ">
          <Link to="/events" className="hidden md:inline text-gray-600">
            Main Bareng
          </Link>
        </div>

        <div className="flex-grow mx-6">
          <Input
            type="text"
            name="searchEvent"
            id="searchEvent"
            placeholder="Cari event mabar..."
            className="hidden md:block p-2 border border-gray-300 rounded-lg"
          />
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
    </div>
  );
}
