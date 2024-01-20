import logo from "@/assets/images/logo-white.png";
import { Typography } from "@/components/ui/Typography";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { serviceitems } from "@/utils/Servicelistdata";
import { Navitems } from "@/utils/Navdata";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1D1D1D] text-slate-50">
      <div className="container py-10 flex flex-col gap-12 lg:gap-24 items-center">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 items-center w-full justify-between">
          <div className="flex flex-col text-lg gap-4 items-center w-full lg:w-[265px] ">
            <Typography variant="h1" className="text-white">
              Logo
            </Typography>
            <Typography
              variant="p"
              className="text-center text-white font-normal "
            >
              CleanScape Property Management is a premier property cleaning
              company offering a diverse range of services for residential,
              commercial, industrial, and institutional properties. Our
              customized cleaning plans, executed by a professional and reliable
              team, ensure exceptional cleanliness tailored to the unique needs
              of each property.
            </Typography>
            <Typography variant="p" className="font-normal text-white">
              info@cleaningservice.com
            </Typography>
            <Typography variant="p" className="font-normal text-white">
              +234123456789
            </Typography>
          </div>
          <div className="max-w-[680px] lg:flex flex-col gap-16 hidden ">
            <div className="flex justify-center lg:justify-start max-md:flex-wrap gap-12 ">
              {Navitems.map((link, index) => (
                <a className="font-normal text-lg" key={index} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
            <ul className="flex flex-wrap gap-6 text-lg">
              {serviceitems.map((service, index) => (
                <li className="flex gap-4 items-center w-[48%]" key={index}>
                  <span className="w-3 h-3 rounded-full bg-primary" />{" "}
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  lg:flex-col gap-3 items-center">
            {SocialLinks.map((Social, index) => (
              <a
                className="p-2 rounded-full bg-primary hover:opacity-90"
                href={Social.link}
                rel="noreferrer noopener"
                target="_blank"
                key={index}
              >
                {Social.icon}
              </a>
            ))}
          </div>
        </div>
        <Separator />
        <Typography variant="p" className="w-[175px] text-center text-white">
          Cleaning service ©copyright 2024
        </Typography>
      </div>
    </footer>
  );
}
const SocialLinks = [
  {
    link: "https://twitter.com/nexapluse?s=11",
    icon: <TwitterIcon className="text-white " />,
  },
  {
    link: "https://www.instagram.com/invites/contact/?i=1erwhy2o3aj1x&utm_content=tdb6tsu",
    icon: <InstagramIcon className="text-white " />,
  },
  {
    link: "https://www.linkedin.com/company/nexapulse/about/",
    icon: <LinkedinIcon className="text-white " />,
  },
];

const links = [
  {
    title: "About",
    href: "#about-us",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Consultation",
    href: "#consultation",
  },
];
