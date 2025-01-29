import Developer from "@/components/Developer";
import Footer from "@/components/Footer";
import Games from "@/components/Games";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

// Hemo Heros is the name
// landing page, a link to learn, & leaderboard 

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <Nav/>
      <Hero/>
      </div>

      <Games/>
      <Testimonials/>
      <Developer/>
      <Footer/>
    </div>
  );
}
