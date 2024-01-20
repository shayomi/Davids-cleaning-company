"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { Typography } from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { FadeIn } from "@/Variant";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Pricing = () => {
  return (
    <motion.div className=" ">
      <div className="flex flex-col gap-y-8">
        <h1 className="background-text ">PRICING</h1>

        <div>
          <Typography variant="h3" className="text-center">
            Pricing
          </Typography>
          <div className="flex flex-col max-w-[700px] mx-auto gap-y-4 mt-12 px-4">
            <Typography>Your name</Typography>
            <Input />

            <Typography>Your Email</Typography>
            <Input />

            <Typography>Your Phone No</Typography>
            <Input />

            <Typography>What do you want us to do for you</Typography>
            <Textarea />

            <Button className="bg-primary hover:bg-[43A4EE] mt-6">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pricing;
