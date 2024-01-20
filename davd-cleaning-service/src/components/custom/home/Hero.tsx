"use client";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { transition1 } from "@/Transition";

const HomeHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <motion.div className="home-hero-bg relative pt-16 pb-44 sm:pt-14 sm:pb-32 min-h-[700px] sm:min-h-[600px] xl:min-h-[700px] sm:h-[85vh] w-full flex items-center">
        <motion.div className="container z-20 flex items-center h-full mt-24 px-12">
          <div className="flex items-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8 w-full">
            <motion.div
              variants={FadeIn("down", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="basis-full sm:basis-1/2 order-last sm:order-first"
            >
              <div className="sm:max-w-lg">
                <div className="space-y-4 mb-8">
                  <Typography
                    variant="h1"
                    className="hidden sm:block leading-[3rem] sm:leading-none"
                  >
                    Best Quality
                  </Typography>

                  <Typography
                    variant="h1"
                    className="leading-[3rem] sm:leading-none"
                  >
                    <span className="sm:hidden">Best Quality</span>
                    <span> Solution In </span>
                    <span className=" sm:hidden text-primary">
                      Property Management
                    </span>
                  </Typography>

                  <Typography
                    variant="h1"
                    className="text-primary leading-[3rem] sm:leading-none hidden sm:block"
                  >
                    Property Management
                  </Typography>
                </div>

                <Typography variant="p" className="max-w-[80%] mb-10">
                  We do the dirty work so you don’t have to
                </Typography>

                <a
                  href={process.env.NEXT_PUBLIC_APPLICATION_FORM_LINK}
                  target="_blank"
                >
                  <Button size="lg">Get Started</Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={FadeIn("up", "tween", 0.2, 0.8)}
              initial="hidden"
              whileInView={"show"}
              exit={"show"}
              className="basis-full sm:basis-1/2 flex sm:justify-end order-first sm:order-last mx-auto"
            >
              <img
                src="/images/hero-header.png"
                alt="Homepage hero image"
                className="h-[300px] sm:h-full sm:max-h-[65vh] w-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeHero;
