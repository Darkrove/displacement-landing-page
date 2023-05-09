import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";

interface Props {}

const MainNav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 w-full h-20 ">
      <div className="flex items-center justify-between max-w-7xl h-full px-8 mx-auto">
        <Link
          href="/"
          className="flex flex-row space-x-2 justify-center items-center"
        >
          <Icons.logo className="w-5 h-5 text-stone-400" />
          <p className="text-md md:text-xl font-bold text-stone-200 uppercase cursor-pointer">
            Displacement
          </p>
        </Link>
        <div className="hidden md:block">
          <div className=" flex items-center justify-between space-x-8">
            <Link href="/about">
              <p className="text-stone-200 uppercase cursor-pointer">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-stone-200 uppercase cursor-pointer">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
