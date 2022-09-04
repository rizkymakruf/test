import { memo } from "react";
import Image from "next/image";
import logo from "../../public/asset/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white px-4 py-2">
        <div className="relative w-24">
          <Image src={logo} layout={"responsive"} objectFit={"cover"} />
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
