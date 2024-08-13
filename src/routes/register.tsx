import { Form } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

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
