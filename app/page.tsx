'use client'
import Navbar from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import TechMarquee from "@/components/TechMarquee"
import Projects from "@/components/Projects"
import Story from "@/components/Story"
import Services from "@/components/Services"
import Footer from "@/components/Footer"
import Spinner from "@/components/Spinner"
import Test from "@/components/Test"
import dynamic from "next/dynamic"
import { useInView } from "react-intersection-observer";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-neutral-600">
        <Navbar />
        <Hero />
        <TechMarquee />
        <Projects />
      </div>
      {/* <Story /> */}
      <Services />
      <Footer />
    </>
    // <Test />
  )
}

// const TechMarquee = dynamic(() => import("@/components/TechMarquee"), {
//   loading: () => <p className="text-2xl text-center p-24">Loading</p>
// })
// const Projects = dynamic(() => import("@/components/Projects"), {
//   loading: () => <p className="text-2xl text-center p-24">Loading</p>
// })
// const Story = dynamic(() => import("@/components/Story"), {
//   loading: () => <p className="text-2xl text-center p-24">Loading</p>
// })
// const Services = dynamic(() => import("@/components/Services"), {
//   loading: () => <p className="text-2xl text-center p-24">Loading</p>
// })
// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <p className="text-2xl text-center p-24">Loading</p>
// })

// const Home = () => {

//   const { ref: techMarqueeRef, inView: techMarqueeVisible } = useInView();
//   const { ref: projectRef, inView: projectVisible } = useInView();
//   const { ref: storyRef, inView: storyVisible } = useInView();
//   const { ref: servicesRef, inView: servicesVisible } = useInView();
//   const { ref: footerRef, inView: footerVisible } = useInView();

//   return (
//     <>
//       <div className="overflow-x-hidden bg-neutral-600">
        
//         <Navbar />
//         <Hero />

//         <div ref={techMarqueeRef}>
//           {techMarqueeVisible && <TechMarquee />}
//         </div>


//         <div ref={projectRef}>
//           {projectVisible && <Projects />}
//         </div>

//         <Projects />

//       </div>

//       <div ref={storyRef}>
//         {storyVisible && <Story />}
//       </div>

//       <div ref={servicesRef}>
//         {servicesVisible && <Services />}
//       </div>


//       <div ref={footerRef}>
//         {footerVisible && <Footer />}
//       </div>

//       <Footer />

//     </>
//   )
// }

export default Home