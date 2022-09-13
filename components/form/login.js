import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import logo from "../../public/asset/logo.png";
import { Router, useRouter } from "next/router";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const route = useRouter();

  const [data, setData] = React.useState("");

  const onSubmit = async (data) => {
    const body = {
      grant_type: "password",
      client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
      client_id: "e78869f77986684a",
      username: data.username || "",
      password: data.password || "",
    };

    const ftch = await fetch("api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });

    if (ftch.status === 200) {
      route.replace("/dashboard");
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full px-12 pt-28">
        <Image src={logo} layout={"responsive"} objectFit={"cover"} priority />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full pt-32 flex flex-col justify-center items-center gap-y-4"
      >
        <div>
          <p className="text-center">Username</p>
          <input
            {...register("username", { required: true })}
            className="shadow-md rounded-md py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 px-2"
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <p className="text-center">Password</p>
          <input
            {...register("password", { required: true })}
            className="shadow-md rounded-md py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 px-2"
          />

          {errors.password && <span>This field is required</span>}
        </div>

        <div>
          <input
            type="submit"
            className="py-1 px-6 rounded-md shadow-md font-bold border"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
