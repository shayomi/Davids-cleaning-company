"use client";

import React from "react";
import { Typography } from "@/components/ui/Typography";
import { Contactdata } from "@/utils/Contactdata";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { transition1 } from "@/Transition";

const Contact = () => {
  return (
    <motion.div className="container  mt-24 bg-[#f5f5f5]" id="contact">
      <h1 className="background-text pt-12 text-left">Contact</h1>
      <motion.div className="pb-24">
        <h2 className="text-3xl lg:text-5xl text-foreground ">Contact Us</h2>
        <motion.div className="grid grid-cols-1  md:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 xl:gap-6 mt-12 sm:mt-16">
          {Contactdata.map((items, index) => (
            <motion.div
              initial="hidden"
              whileInView={"show"}
              variants={FadeIn("up", "spring", index * 0.2, 0.6)}
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              key={index}
              className="flex flex-col gap-4 items-center p-8 rounded-xl  bg-[#dbe8ef] shadow-xl gray-card-shadow w-full md:w-[300px] md:h-[300px] text-lg md:text-2xl text-center text-primary"
            >
              {items.icon}
              <Typography variant="h5" className="text-medium text-foreground">
                {items.text}
              </Typography>
              <a href="#">
                <Typography
                  variant="h5"
                  className="text-medium text-foreground"
                >
                  {" "}
                  {items.href}
                </Typography>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
