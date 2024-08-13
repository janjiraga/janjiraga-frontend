import { Form, Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { SiteNavigation } from "../components/ui/shared/site-navigation";

export function LoginRoute() {
  return (
    <>
      <SiteNavigation />
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
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <Input id="username" name="username" type="text" required />
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
