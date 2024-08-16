import Image from "next/image";
import { StarsBackground } from "@/components/ui/stars-background";
import { TracingBeam } from "@/components/ui/tracing-beam";
import path from "@/public/story/path.json"
import { ShootingStars } from "./ui/shooting-stars";

export default function Story() {
  return (
    <div className="w-full bg-black py-8">
        <h1 className="text-white text-2xl lg:text-3xl tracking-widest text-center p-8">My Programming Journey</h1>
        <TracingBeam>

            {contents && contents.map((content, index) => (
                <div key={index}>
                <div className="antialiased w-full text-white px-12 lg:px-10 py-12">
                    <h1 className="text-lg lg:text-2xl tracking-wider font-sans md:mx-4 py-2 md:py-4">{content.title}</h1>
                    <h1 className="text-xs lg:text-sm py-2 md:py-4 mx-4 md:mx-8">{content.date}</h1>
                    <Image
                        src={content.img}
                        alt={content.img}
                        priority={true}
                        width={600}
                        height={600}
                        className="mx-auto rounded-lg py-4"
                    />
                    <p className="text-left tracking-wide text-xs lg:text-sm py-8 mx-4 md:mx-12 lg:mx-24">
                        {content.short}
                    </p>
                </div>
                <StarsBackground />
                </div>
            ))
            }
            <ShootingStars className="h-[300vh]" />
        </TracingBeam>
    </div>
  );
}

const contents = [
    {
        date: "Jan 2021 - Feb 2022",
        title: "The uninspected beginning",
        short: "The first language I learn is java. I learn programming fundamentals in this language such as types, variables, loops, functions all the way till I master OOP.",
        img: path.beginning
    },
    {
        date: "Feb 2022 - Nov 2022",
        title: "Embracing the structural complexity",
        short: "Since I already learn the OOP concept it is easy for me to change the syntax. In this time I learn python such as IOT, Database drivers, Machine learning, Automation and Math.",
        img: path.complexity
    },
    {
        date: "Nov 2022 - Jun 2023",
        title: "Emerging practical software and website",
        short: "In this Months I Build Software API's since my fundamentals is solid from java and concepts from advance python I build Web app and complex backend infostructure's such as authentications, web sockets, data analytics, file storage and payments.",
        img: path.emerging
    },
    {
        date: "Jun 2023 - present",
        title: "Entering the present tech problems",
        short: "I spend my days learning nextjs and experience most programmers dilemma such as rendering patterns, vulnerability's and problems that are currently in the framework or library fault.",
        img: path.present
    }
];
