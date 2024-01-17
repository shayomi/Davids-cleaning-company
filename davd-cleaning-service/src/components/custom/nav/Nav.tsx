import React from "react";
import Image from "next/image";
import { Navitems } from "@/utils/Navdata";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="container flex justify-between items-center py-5">
        <Link href="/">
          <h1 className="font-bold text-3xl text-secondary">Logo</h1>
        </Link>

        <div className="hidden sm:block">
          {Navitems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-popover hover:text-gray-500 px-4 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button
          variant="default"
          className="bg-secondary text-primary text-md hidden sm:flex hover:bg-secondary/90"
        >
          Get started
        </Button>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
