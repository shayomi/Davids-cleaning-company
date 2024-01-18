"use client";
import React from "react";
import { serviceitems } from "@/utils/Servicelistdata";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { Typography } from "@/components/ui/Typography";
import { transition1 } from "@/Transition";

const ServiceList = () => {
  return (
    <motion.div className="container mt-24">
      <h1 className="background-text sm:text-[6rem] xl:text-[7.2rem] sm:text-left">
        WHAT WE DO
      </h1>

      <Typography variant="h3" className="text-start">
        Our list of services covers the following and more
      </Typography>
      <div className="flex flex-col lg:flex-row gap-x-5 gap-y-6 mt-24">
        <motion.img
          initial="hidden"
          whileInView={"show"}
          variants={FadeIn("right", "tween", 0.6, 1.0)}
          src="/images/service-img.png"
          alt="Service overview"
          className="max-w-[500px]  h-auto rounded-xl mx-auto "
        />
        <motion.div
          initial="hidden"
          whileInView={"show"}
          variants={FadeIn("left", "tween", 0.6, 1.0)}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 px-0 md:px-6 gap-y-4 mx-auto"
        >
          {serviceitems.map((item, index) => (
            <ul
              key={index}
              className="text-primary hover:text-gray-500 px-4 font-normal list-disc  "
            >
              <li>{item.name}</li>
            </ul>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceList;
