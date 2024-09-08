import { useState } from "react";
import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { authCookie } from "../lib/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

type LoginResponse = {
  message: string;
  data: {
    token: string;
  };
};
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    username: formData.get("userName"),
    password: formData.get("password"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_APP_API_BASEURL}/auth/login`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const loginResponse: LoginResponse = await response.json();

  if (loginResponse?.message === "Success") {
    const token = loginResponse?.data?.token;
    authCookie.set("token", token);
    toast.success("Login berhasil");
    return redirect("/");
  } else {
    toast.error(loginResponse?.message);
    return null;
  }
};

export function LoginRoute() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex items-center gap-4">
      <div className="w-1/2">
        <h1 className="text-4xl font-poppins font-bold mb-4">Masuk ke Akun</h1>
        <Form method="POST" className="w-full flex flex-col gap-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Username
            </label>
            <Input id="userName" name="userName" type="text" required />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                required
                className="pr-10" // Adjust padding to make room for the icon
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" /> // Use FaEyeSlash for hiding password
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" /> // Use FaEye for showing password
                )}
              </button>
            </div>
          </div>
          <div className="flex gap-5 mt-8">
            <Button
              className="w-full bg-j-green-dark hover:bg-j-green-darker"
              type="submit"
            >
              Masuk
            </Button>
            <Link to="/register" className="w-full">
              <Button className="w-full" type="button" variant="outline">
                Daftar
              </Button>
            </Link>
          </div>
        </Form>
      </div>
      <div>
        <img
          src="https://ucarecdn.com/ccf76d6e-8f52-408a-ba3b-576f1a1e5624/186GivingHighFive.png"
          alt="login"
        />
      </div>
    </div>
  );
}
