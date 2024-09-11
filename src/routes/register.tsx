import { Form, Link, useNavigation, useSubmit } from "react-router-dom";
import { User } from "../types/index";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type RegisterResponse = {
  message: string;
  newUser: Pick<User, "username">;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    firstName: formData.get("firstName")?.toString(),
    lastName: formData.get("lastName")?.toString(),
    email: formData.get("email")?.toString(),
    phone: formData.get("phone")?.toString(),
    username: formData.get("username")?.toString(),
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

  if (registerResponse?.message === "Success") {
    toast.success("Register berhasil");
    return redirect("/login");
  } else {
    toast.error(registerResponse?.message);
    return null;
  }
};

const formSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().min(6),
});

export function RegisterRoute() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { state } = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submit = useSubmit();

  const onSubmit = (userData: z.infer<typeof formSchema>) => {
    submit(userData, {
      method: "post",
    });
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-1/2">
        <h1 className="text-4xl font-poppins font-bold mb-4">
          Daftar akun baru
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="w-full flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Nama Depan
            </label>
            <Input
              id="firstName"
              {...register("firstName")}
              type="text"
              required
            />
            {errors.firstName && (
              <span className="text-sm text-red-500">
                {errors.firstName?.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Nama Belakang
            </label>
            <Input
              id="lastName"
              {...register("lastName")}
              type="text"
              required
            />
            {errors.lastName && (
              <span className="text-sm text-red-500">
                {errors.lastName?.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Email
            </label>
            <Input id="email" {...register("email")} type="email" required />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Telepon
            </label>
            <Input id="phone" {...register("phone")} type="tel" required />
            {errors.phone && (
              <span className="text-sm text-red-500">
                {errors.phone?.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Username
            </label>
            <Input
              id="username"
              {...register("username")}
              type="text"
              required
            />
            {errors.username && (
              <span className="text-sm text-red-500">
                {errors.username?.message}
              </span>
            )}
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
                {...register("password")}
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
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>
          <div className="flex gap-5 mt-8">
            <Button
              className="w-full bg-j-green-dark hover:bg-j-green-darker"
              type="submit"
              disabled={state === "submitting" || state === "loading"}
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
