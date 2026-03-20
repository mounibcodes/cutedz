import About from "@/components/About";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Work from "@/components/Work";
import Mentor from "@/components/Mentor";
import FAQ from "@/components/FAQ";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Work/>
      <Mentor/>
      <Programs/>
      <SuccessStories/>
      <FAQ/>
    </main>

  )
  ;
}
