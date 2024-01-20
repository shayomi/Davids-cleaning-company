"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { FadeIn } from "@/Variant";
import { Button } from "@/components/ui/button";

const Bannerone = () => {
  return (
    <div className="bg-[#0591E9] ">
      <div className="grid grids-col-1 md:grid-cols-2 px-6 py-12 ">
        <motion.div
          variants={FadeIn("down", "tween", 0.6, 0.6)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="sm:flex md:hidden"
        >
          {" "}
          <Typography
            variant="h2"
            className=" text-center text-white font-bold font-MuseoMorderno text-[18px] md:text-[36px]  leading-11"
          >
            Beautifying your home
          </Typography>
        </motion.div>

        <motion.div
          variants={FadeIn("down", "tween", 0.6, 1.2)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full sm:basis-6/12 lg:basis-5/12"
        >
          <img
            src="/images/banner1.png"
            alt="About"
            className="w-full h-auto pt-12 "
          />
        </motion.div>

        <motion.div
          variants={FadeIn("down", "tween", 0.6, 0.6)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className=" flex flex-col  text-start justify-center items-center mx-auto "
        >
          <Typography
            variant="h2"
            className="hidden md:flex text-white font-bold font-MuseoMorderno text-[18px] md:text-[36px]  leading-11"
          >
            Beautifying your home
          </Typography>
          <Typography variant="h6" className="text-white mt-4">
            Because we keep our standards higher
          </Typography>
          <div className="flex flex-row mt-12 gap-x-6">
            <Button className="bg-white hover:bg-[43A4EE] text-primary">
              Learn more
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Bannerone;
