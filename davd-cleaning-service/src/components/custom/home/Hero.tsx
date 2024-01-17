"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";

const Hero = () => {
  return (
    <motion.div className="hero-banner-bg">
      <motion.div
        variants={FadeIn("down", "tween", 0.6, 0.6)}
        initial="hidden"
        whileInView={"show"}
        exit={"show"}
        className=" flex flex-col  text-center justify-center items-center mx-auto "
      >
        <Typography
          variant="h2"
          className="text-white font-bold font-MuseoMorderno text-[36px]  leading-11"
        >
          Best Quality solution in{" "}
          <span className="text-yellow">property management</span>
        </Typography>
        <Typography variant="h6" className="text-white mt-4">
          We do the dirty work so you dont have to
        </Typography>
        <div className="flex flex-row mt-12 gap-x-6">
          <Button className="bg-primary hover:bg-[43A4EE]">Get started</Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-primary">
            Learn more
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
