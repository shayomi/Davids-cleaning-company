import Hero from "@/components/custom/home/Hero";
import About from "@/components/custom/home/About";
import Service from "@/components/custom/home/Service";
import ServiceList from "@/components/custom/home/ServiceList";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Service />
      <ServiceList />
    </main>
  );
}
