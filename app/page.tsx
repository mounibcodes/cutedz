import About from "@/Components/About";
import Hero from "@/Components/Hero";
import Programs from "@/Components/Programs";
import Work from "@/Components/Work";
import Mentor from "@/Components/Mentor";
import FAQ from "@/Components/FAQ";
import SuccessStories from "@/Components/SuccessStories";

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
