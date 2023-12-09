import React from "react";
import { Button } from "../../../components/ui/button";
import { MenuIcon } from "lucide-react";
import ClippyLogo from "../../../../public/images/clippy-logo.png";
import Image from "next/image";

const MainHeader = () => {
  return (
    <nav className="flex justify-between p-4 items-center fixed w-full">
      <div>
        <div className="text-gray-100 flex items-center">
          <MenuIcon  className="h-8 w-8"/>
          <div className="flex">
            <Image src={ClippyLogo} alt="Clippy Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-semibold">Clippy</h1>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <Button className="bg-theme-primary">Login</Button>
      </div>
    </nav>
  );
};

export default MainHeader;
