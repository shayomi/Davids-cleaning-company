import React from "react";
import { Typography } from "@/components/ui/Typography";
import { Separator } from "@/components/ui/separator";
const Quote = () => {
  return (
    <div className="container mt-24 mb-24">
      <div className="flex flex-col gap-6 justify-center text-center mx-auto py-24">
        <Typography variant="h5" className="text-foreground font-italic">
          Happiness is a freshly cleaned house
        </Typography>
        <Separator />
        <Typography variant="p" className="text-foreground font-normal">
          We've got you covered
        </Typography>
      </div>
    </div>
  );
};

export default Quote;
