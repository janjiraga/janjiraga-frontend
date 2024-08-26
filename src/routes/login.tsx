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

  const response = await fetch(`${import.meta.env.VITE_APP_API_BASEURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginResponse: LoginResponse = await response.json();
  if (!loginResponse) {
    return null;
  }
  console.log(loginResponse);
  const token = loginResponse.data.token;
  authCookie.set("token", token);
  return redirect("/");
};

export function LoginRoute() {
  return (
    <>
      <h1 className="text-4xl font-bold p-4">Masuk ke Akun</h1>
      <p className="text-xl p-4">Log in with your email address and password</p>
      <div className=" flex m-4">
        <div className="w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt=""
          />
        </div>
        <Form method="POST" className="m-4 w-1/2">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <Input id="userName" name="userName" type="text" required />
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

          <div className="flex my-4">
            <Button type="submit" className=" w-1/2 m-2">
              Sign in
            </Button>
            <Button className="w-1/2 m-2">
              <Link to="/register"> Create an Account</Link>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
