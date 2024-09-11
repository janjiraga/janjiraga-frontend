import { useState } from "react";
import {
  ActionFunctionArgs,
  Link,
  redirect,
  useSubmit,
  Form,
  useNavigation,
} from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authCookie } from "../lib/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const backendURL = import.meta.env.VITE_APP_API_BASEURL;

type LoginResponse = {
  message: string;
  data: {
    token: string;
  };
};

async function getUserProfile(token: string) {
  try {
    const response = await fetch(`${backendURL}/auth/my-profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = await response.json();

    return userProfile;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const response = await fetch(`${backendURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const loginResponse: LoginResponse = await response.json();

  if (loginResponse?.message === "Success") {
    const token = loginResponse?.data?.token;
    const userProfile = await getUserProfile(token);

    authCookie.set("token", token);
    localStorage.setItem("userProfile", JSON.stringify(userProfile.data));
    toast.success("Login berhasil");
    return redirect("/");
  } else {
    toast.error(loginResponse?.message);
    return null;
  }
};

const formSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export function LoginRoute() {
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
        <h1 className="text-4xl font-poppins font-bold mb-4">Masuk ke Akun</h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="w-full flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              {...register("username")}
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
