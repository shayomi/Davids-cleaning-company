import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";
import Logo from "../../../../public/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Navitems } from "@/utils/Navdata";

const MobileNav = () => {
  return (
    <section className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={28} className="text-foreground" />
        </SheetTrigger>

        <SheetContent side="top" className="w-full rounded-xl">
          <SheetHeader className="text-left">
            <SheetTitle className="mt-8 mb-12 flex flex-wrap justify-between items-end">
              <Link href="/">
                <h1>Logo</h1>
              </Link>

              <Button className="text-xs w-32">Get Started</Button>
            </SheetTitle>

            <div className="flex flex-col space-y-5 pb-5">
              {Navitems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-foreground hover:text-gray-500"
                >
                  <h6 className={"font-medium"}>{item.name}</h6>
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
