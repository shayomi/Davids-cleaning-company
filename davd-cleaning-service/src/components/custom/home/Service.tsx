"use client";

import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { transition1 } from "@/Transition";

const Service = () => {
  return (
    <motion.div>
      <div className="container text-center mt-12">
        <h1 className="background-text sm:text-[6rem] xl:text-[7.2rem] sm:text-left">
          SERVICES
        </h1>

        <Typography variant="h3" className="text-start">
          Our services
        </Typography>

        <motion.div className="flex flex-row flex-wrap sm:flex-nowrap gap-20 sm:gap-5 lg:gap-10 xl:gap-14 mt-28 text-left items-stretch">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={FadeIn("up", "tween", 0.2, 0.4)}
            className="basis-full sm:basis-4/12 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              className="bg-[#A5D9FA]  py-10 px-6 rounded-3xl h-full"
            >
              <img
                src="/images/service1-img.png"
                alt="Home overview"
                className="w-full h-auto "
              />
              <Typography variant="h4" className="text-foreground mt-5">
                Residential Cleaning
              </Typography>

              <Typography variant="p" className="mt-4 text-foreground">
                We clean and maintain homes, apartments, and other residential
                spaces. Services may include dusting and sanitizing
                workstations, cleaning common areas, carpet cleaning, and
                maintaining restrooms.
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={FadeIn("up", "tween", 0.6, 0.4)}
            className="basis-full sm:basis-4/12 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              className="bg-[#A5D9FA] py-10 px-6 rounded-3xl h-full "
            >
              <img
                src="/images/service2-img.png"
                alt="Home overview"
                className="w-full h-auto "
              />
              <Typography variant="h4" className="text-foreground mt-5">
                Commercial Cleaning
              </Typography>

              <Typography variant="p" className="mt-4 text-foreground">
                We clean offices, retail spaces, warehouses, and other
                commercial properties. Services may include dusting and
                sanitizing workstations, cleaning common areas, carpet cleaning,
                and maintaining restrooms.
              </Typography>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView={"show"}
            variants={FadeIn("up", "tween", 1.0, 0.4)}
            className="basis-full sm:basis-4/12 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={transition1}
              className="bg-[#A5D9FA] py-10 px-6 rounded-3xl h-full"
            >
              <img
                src="/images/service3-img.png"
                alt="Home overview"
                className="w-full h-auto "
              />
              <Typography variant="h4" className="text-foreground mt-5">
                Specilaized Cleaning
              </Typography>

              <Typography variant="p" className="mt-4 foreground">
                Some cleaning companies offer specialized services to address
                specific needs. This can include carpet and upholstery cleaning,
                window washing, deep cleaning for move-ins or move-outs, and
                more.
              </Typography>
            </motion.div>
          </motion.div>
        </motion.div>

        <Button className="text-xs h-12 w-48 mt-24">Learn More</Button>
      </div>
    </motion.div>
  );
};

export default Service;
