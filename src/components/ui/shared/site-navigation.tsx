import { Form, Link, useSearchParams } from "react-router-dom";
import { Button } from "../button";
import { Input } from "../input";
import Logo from "../../../assets/logo.png";
import ProfileImage from "./profile-image";
import { authCookie } from "@/lib/auth";

export function SiteNavigation() {
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q");
  const token = authCookie.get("token");

  return (
    <div className="border-b border-b-gray-light fixed top-0 w-full z-10 bg-white">
      <nav className="py-4 flex justify-between items-center px-4 md:px-0 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl mx-auto">
        <div className="flex items-center">
          <img src={Logo} alt="logo janjiraga" className="h-10 w-10" />
          <Link to="/" className="font-poppins text-lg md:text-2xl font-bold">
            Janjiraga
          </Link>
        </div>

        <div className="ml-6 flex gap-3">
          <Link
            to="/events"
            className="font-poppins hidden md:inline text-gray-600"
          >
            Main Bareng
          </Link>
          <Link
            to="/about"
            className="font-poppins hidden md:inline text-gray-600"
          >
            About
          </Link>
        </div>

        <div className="flex-grow mx-6">
          <Form
            id="search-product"
            method="get"
            action="/events"
            className="flex w-full items-center space-x-1"
          >
            <Input
              type="text"
              name="q"
              id="q"
              defaultValue={querySearch ?? undefined}
              placeholder="Cari event mabar..."
              className="font-plus hidden md:block p-2 border border-gray-300 rounded-lg"
            />
          </Form>
        </div>

        {token ? (
          <ProfileImage />
        ) : (
          <div className="flex items-center font-poppins">
            <Link to="/login" className="mr-4">
              <Button variant="outline">Masuk</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-j-green-dark hover:bg-j-green-darker">
                Daftar
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
