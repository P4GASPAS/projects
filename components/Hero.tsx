import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Hero() {
    const words = [
        {
            text: "Hi,",
            className: "text-white"
        },
        {
            text: "I'm",
            className: "text-white"
        },
        {
            text: "Yhestin",
            className: "text-primary",
        }
    ];
  return (

    <BackgroundGradientAnimation className="absolute h-full transform-gpu">
        <div className="relative py-56 px-8 md:px-28 lg:px-56 xl:px-64">
            <TypewriterEffectSmooth words={words} className="transform-gpu" />
            <p className="text-2xl text-white">Full-stack web developer that focuses on security</p>
        </div>
    </BackgroundGradientAnimation>
  );
}
