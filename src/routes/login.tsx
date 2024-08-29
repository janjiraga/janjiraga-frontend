import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { authCookie } from "../lib/auth";

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
  if (!loginResponse) {
    return null;
  }
  console.log(loginResponse);
  const token = loginResponse?.data?.token;
  authCookie.set("token", token);
  return redirect("/");
};

export function LoginRoute() {
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
            <Input id="password" name="password" type="password" required />
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
