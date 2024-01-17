import localFont from "next/font/local";

export const lato = localFont({
  src: [
    {
      path: "../../public/fonts/lato/Lato-Black.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/lato/Lato-Regular.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const Museomorddeno = localFont({
  src: [
    {
      path: "../../public/fonts/museomordeno/MuseoMorderno.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});
