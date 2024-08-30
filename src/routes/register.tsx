import { Form, Link } from "react-router-dom";
import { User } from "../types/index";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ActionFunctionArgs, redirect } from "react-router-dom";

type RegisterResponse = {
  message: string;
  newUser: Pick<User, "username">;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    username: formData.get("username")?.toString(),
    firstName: formData.get("firstName")?.toString(),
    lastName: formData.get("lastName")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  };

  const response = await fetch(
    `${import.meta.env.VITE_APP_API_BASEURL}/auth/register`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const registerResponse: RegisterResponse = await response.json();
  if (!registerResponse) {
    return null;
  }

  return redirect("/login");
};

export function RegisterRoute() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-1/2">
        <h1 className="text-4xl font-poppins font-bold mb-4">
          Daftar akun baru
        </h1>
        <Form method="POST" className="w-full flex flex-col gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              First Name
            </label>
            <Input id="firstName" name="firstName" type="text" required />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Last Name
            </label>
            <Input id="lastName" name="lastName" type="text" required />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Username
            </label>
            <Input id="username" name="username" type="text" required />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Email
            </label>
            <Input id="email" name="email" type="email" required />
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
              Daftar
            </Button>
            <Link to={"/login"} className="w-full">
              <Button className="w-full" type="button" variant="outline">
                Masuk
              </Button>
            </Link>
          </div>
        </Form>
      </div>
      <div>
        <img
          src="https://ucarecdn.com/fee4940f-6c0d-40da-ae74-bc56655ef338/90StartUp.png"
          alt="register"
        />
      </div>
    </div>
  );
}
