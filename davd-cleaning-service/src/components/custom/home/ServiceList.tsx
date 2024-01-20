"use client";
import React from "react";
import { serviceitems } from "@/utils/Servicelistdata";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { Typography } from "@/components/ui/Typography";
import { transition1 } from "@/Transition";

const ServiceList = () => {
  return (
    <motion.div className="container  bg-[#f5f5f5] pb-24">
      <Typography variant="h3" className="text-start">
        Our list of services covers the following and more
      </Typography>
      <div className=" mt-12">
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
          {serviceitems.map((item, index) => (
            <motion.ul
              initial="hidden"
              whileInView={"show"}
              variants={FadeIn("up", "spring", index * 0.2, 1.0)}
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              key={index}
              className="bg-[#dbe8ef] shadow-xl gray-card-shadow px-2.5 py-5 sm:px-4 sm:py-6 text-center rounded-lg text-foreground "
            >
              <li>{item.name}</li>
            </motion.ul>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceList;
