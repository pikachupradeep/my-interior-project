
import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ"
import Features from "@/components/features/Features";
import Header from "@/components/header/Header";
import { InfiniteMovingCardsDemo } from "@/components/ui/MovingCars"




const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <InfiniteMovingCardsDemo />
     
      <FAQ />
     
    
    
    </div>
  )
}

export default Home