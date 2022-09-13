import Image from "next/image";
import logo from "../public/asset/logo.png";
import { useRouter } from "next/router";
// import fetchJson, { FetchError } from "lib/fetchJson";
import { useContext } from "react";
import { GlobalContext } from "../context/global";

export default function Home() {
  // const { globalCtx, globalAct } = useContext(GlobalContext);
  const router = useRouter();

  return (
    <>
      <div className="w-full h-screen bg-gray-100">
        <div className="w-full px-12 pt-28">
          <Image src={logo} layout={"responsive"} objectFit={"cover"} />
        </div>
        <form>
          <div className="w-full flex flex-col justify-center items-center space-y-3 pt-24">
            <div className="w-full flex flex-col justify-center gap-y-1 items-center">
              <p className="text-gray-400 font-bold" id="email">
                Email
              </p>
              <input className="shadow-md rounded-md py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 px-2" />
            </div>
            <div className="w-full flex flex-col justify-center gap-y-1 items-center">
              <p className="text-gray-400 font-bold" id="password">
                Password
              </p>
              <input className="shadow-md rounded-md py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 px-2" />
            </div>
            <div className="w-full flex justify-center items-center pt-5">
              <button
                className="py-1 px-6 rounded-md shadow-md font-bold border"
                // globalCtx={globalCtx}
                // globalAct={globalAct}
                // onSubmit={async function handleSubmit(e) {
                //   e.preventDefault();
                //   globalAct.setIsFetch(true);

                //   const body = {
                //     username: e.currentTarget.email.value,
                //     password: e.currentTarget.password.value,
                //     uri: "https://soal.staging.id/oauth/token",
                //   };

                //   try {
                //     const res = await fetchJson("/api/post", {
                //       method: "POST",
                //       headers: { "Content-Type": "application/json" },
                //       body: JSON.stringify(body),
                //     });

                //     router.push("/dashboard");
                //   } catch (error) {
                //     if (error instanceof FetchError) {
                //       globalAct.setErrorMsg(error.data.message);
                //     } else {
                //       globalAct.setErrorMsg("An unexpected error happened");
                //     }
                //   }

                //   globalAct.setIsFetch(false);
                // }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
