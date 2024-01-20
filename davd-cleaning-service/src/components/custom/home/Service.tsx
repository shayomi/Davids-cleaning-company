"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { transition1 } from "@/Transition";
import { Skeleton } from "@/components/ui/skeleton";
import { ServiceItems } from "@/utils/Servicedata";

const Service = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; // 5 seconds in milliseconds

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div id="service">
      <div className="container text-center mt-12 bg-[#f5f5f5]">
        <h1 className="background-text  pt-12">
          {isLoading ? (
            <Skeleton className="w-1/4 h-12 mb-6 rounded-md" />
          ) : (
            "SERVICES"
          )}
        </h1>

        <Typography variant="h3" className="text-start">
          {isLoading ? (
            <Skeleton className="w-1/4 h-8 mb-8 rounded-md" />
          ) : (
            "Our services"
          )}
        </Typography>

        <motion.div className="flex flex-row flex-wrap sm:flex-nowrap gap-20 sm:gap-5 lg:gap-10 xl:gap-14 mt-12 text-left items-stretch pb-24">
          <motion.div className=" flex flex-col gap-y-6 md:flex-row gap-x-12 relative">
            {ServiceItems.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView={"show"}
                variants={FadeIn("up", "tween", index * 0.2, 0.6)}
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                key={index}
                className="bg-white py-10 px-6 rounded-3xl h-full shadow-2xl"
              >
                <img
                  src={item.image}
                  alt="Home overview"
                  className="w-full h-auto "
                />
                <Typography variant="h4" className="text-foreground mt-5">
                  {item.title}
                </Typography>

                <Typography variant="p" className="mt-4 text-foreground">
                  {item.description}
                </Typography>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Service;
