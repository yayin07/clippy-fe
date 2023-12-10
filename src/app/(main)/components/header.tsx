"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { MenuIcon } from "lucide-react";
import ClippyLogo from "../../../../public/images/clippy-logo.png";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MainHeader = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between p-4 items-center fixed top-0 z-20 w-full ${
        scrolling ? "bg-black/80" : "lg:bg-transparent "
      } z-10`}
      style={{ transition: "background-color 0.5s ease" }}
    >
      {/* burger */}
      <div>
        <div className="text-gray-100 flex items-center ">
          <MenuIcon className="h-8 w-8" />
          <div className="flex">
            <Image src={ClippyLogo} alt="Clippy Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-semibold">Clippy</h1>
          </div>

          <div className="hidden">
            <Sheet>
              <SheetTrigger>Open</SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div></div>
      </div>
      {/* login */}
      <div>
        <Button className="bg-theme-primary">Login</Button>
      </div>
    </nav>
  );
};

export default MainHeader;
