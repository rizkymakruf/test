import Image from "next/image";
import logo from "../public/asset/logo.png";
import { useRouter } from "next/router";
// import fetchJson, { FetchError } from "lib/fetchJson";
import { useContext } from "react";
import { GlobalContext } from "../context/global";
import LoginForm from "../components/form/login";

export default function Home() {
  // const { globalCtx, globalAct } = useContext(GlobalContext);
  const router = useRouter();

  return (
    <>
      <LoginForm />
    </>
  );
}
