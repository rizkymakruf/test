import React, { memo, useContext } from "react";
import Card from "../../components/cards/card";
import Image from "next/image";
import logo from "../../public/asset/logo.png";
import EmblaCarousel from "../../components/slider/embla";
import Menu from "../menu/menu";
// import { GlobalContext } from "../../contex/global";

const Dashboard = (props) => {
  const [menu, setMenu] = React.useState("home");
  const [list, setList] = React.useState("seasional");

  const onClick = React.useCallback(
    (m) => () => {
      setMenu(m);
    },
    [menu]
  );

  return (
    <>
      <div className="bg-gray-100 w-full h-screen">
        {menu == "home" ? (
          <div className="w-full">
            <div className="w-full bg-white px-4 py-2">
              <div className="relative w-24">
                <Image src={logo} layout={"responsive"} objectFit={"cover"} />
              </div>
            </div>
            <Card />
            <EmblaCarousel />
          </div>
        ) : (
          <div className="w-full">
            <Menu />
          </div>
        )}

        <div className="bg-white px-3 py-1 justify-center gap-x-32 w-full fixed bottom-0 flex">
          <button
            className="w-12 relative flex flex-col justify-center items-center"
            onClick={onClick("home")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class={`w-8 h-8 ${
                menu === "home" ? "text-black" : "text-gray-400"
              }`}
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <p
              className={`text-sm ${
                menu === "home" ? "text-black" : "text-gray-400"
              }`}
            >
              Home
            </p>
          </button>
          <button
            className="w-12 relative flex flex-col justify-center items-center"
            onClick={onClick("menu")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class={`w-8 h-8 ${
                menu === "menu" ? "text-black" : "text-gray-400"
              }`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            <p
              className={`text-sm ${
                menu === "menu" ? "text-black" : "text-gray-400"
              }`}
            >
              Menu
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Dashboard);
