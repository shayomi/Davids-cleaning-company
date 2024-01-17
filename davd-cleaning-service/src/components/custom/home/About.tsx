"use client";

import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <motion.div className="container mt-12">
      <div className="flex flex-wrap md:flex-nowrap gap-10 sm:gap-8 lg:gap-14 items-center">
        <motion.div
          variants={FadeIn("down", "tween", 0.6, 1.2)}
          initial="hidden"
          whileInView={"show"}
          exit={"show"}
          className="basis-full sm:basis-6/12 lg:basis-5/12"
        >
          <img
            src="/images/about-img.png"
            alt="Home overview"
            className="w-full h-auto pt-12"
          />
        </motion.div>

        <div className="basis-full sm:basis-6/12 lg:basis-7/12 overflow-hidden">
          <h1 className="background-text">ABOUT</h1>

          <motion.div
            variants={FadeIn("up", "tween", 0.6, 1.2)}
            initial="hidden"
            whileInView={"show"}
            exit={"show"}
            className="lg:max-w-[590px] lg:ml-auto z-20 -mt-4"
          >
            <Typography variant="h3">About Us,</Typography>

            <Typography variant="p">
              CleanScape Property Management is a premier property cleaning
              company offering a diverse range of services for residential,
              commercial, industrial, and institutional properties. Our
              customized cleaning plans, executed by a professional and reliable
              team, ensure exceptional cleanliness tailored to the unique needs
              of each property. With state-of-the-art equipment and eco-friendly
              practices, we prioritize sustainability. Rigorous quality
              assurance measures, including regular inspections, guarantee the
              highest standards. Our commitment to responsive customer support
              and a proactive approach sets us apart, creating immaculate,
              welcoming environments that leave a lasting positive impression on
              residents, employees, and visitors.
            </Typography>

            <Button className="bg-primary hover:bg-[43A4EE] mt-4">
              Contact us
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
