import Hero from "@/components/custom/home/Hero";
import About from "@/components/custom/home/About";
import Service from "@/components/custom/home/Service";
import ServiceList from "@/components/custom/home/ServiceList";
import Bannerone from "@/components/custom/home/Bannerone";
import Pricing from "@/components/custom/home/Pricing";
import Contact from "@/components/custom/home/Contact";
import Quote from "@/components/custom/home/Quote";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Service />
      <ServiceList />
      <Bannerone />
      <Pricing />
      <Contact />
      <Quote />
    </main>
  );
}
