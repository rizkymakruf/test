import Image from "next/image";
import logo from "../public/asset/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100">
        <div className="w-full px-12 pt-28">
          <Image src={logo} layout={"responsive"} objectFit={"cover"} />
        </div>
        <div className="w-full flex flex-col justify-center items-center space-y-3 pt-24">
          <div className="w-full flex flex-col justify-center gap-y-1 items-center">
            <p className="text-gray-400 font-bold">Email</p>
            <input className="shadow-md rounded-md py-1" />
          </div>
          <div className="w-full flex flex-col justify-center gap-y-1 items-center">
            <p className="text-gray-400 font-bold">Password</p>
            <input className="shadow-md rounded-md py-1" />
          </div>
          <div className="w-full flex justify-center items-center pt-5">
            <Link href={"/dashboard/dashboard"}>
              <button className="py-1 px-6 rounded-md shadow-md font-bold border">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
