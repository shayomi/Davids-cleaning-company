import Hero from "@/components/custom/home/Hero";
import About from "@/components/custom/home/About";
import Service from "@/components/custom/home/Service";
import ServiceList from "@/components/custom/home/ServiceList";
import Bannerone from "@/components/custom/home/Bannerone";
import Pricing from "@/components/custom/home/Pricing";

export default function Home() {
  return (
    <main className="pb-48">
      <Hero />
      <About />
      <Service />
      <ServiceList />
      <Bannerone />
      <Pricing />
    </main>
  );
}
