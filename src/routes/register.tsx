import { Form } from "react-router-dom";
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

  const response = await fetch(`${import.meta.env.VITE_APP_API_BASEURL}/auth/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const registerResponse: RegisterResponse = await response.json();
  if (!registerResponse) {
    return null;
  }

  return redirect("/login");
};

export function RegisterRoute() {
  return (
    <>
      <h1 className="text-4xl font-bold p-4">Register your Account</h1>
      <p className="text-xl p-4">Register with your email address and password</p>
      <div className=" flex m-4">
        <div className="w-1/2">
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?size=626&ext=jpg" alt="" />
        </div>
        <Form method="POST" className="m-4 w-1/2">
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <Input id="username" name="username" type="text" required />
            </div>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <Input id="firstName" name="firstName" type="text" required />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <Input id="lastName" name="lastName" type="text" required />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <Input id="email" name="email" type="email" required />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
          <Button type="submit" className=" w-1/2 m-2">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
}
