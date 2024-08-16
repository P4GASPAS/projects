import { LinkPreview } from "@/components/ui/link-preview"
import path from "@/public/socialSvg/path.json"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const Footer = () => {
  return (
    <div className="bg-indigo-950 py-4 px-2 text-neutral-200 [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.3),rgba(255,255,255,0))] grid grid-cols-12 gap-2">
        <div className="col-span-12 lg:col-span-4">
            <h1 className="p-4 text-base font-medium">The Developer</h1>
            <div className="p-4 text-sm">
                This website is not a template; it was built and personalized by me.
                 I built this with 
                 {" "}
                 <LinkPreview
                 url={"https://react.dev/"}
                 className="font-semibold text-white text-base underline"
                 >
                    React
                 </LinkPreview>
                 {" "}
                  for rendering,
                  {" "}
                  <LinkPreview
                  url="https://tailwindcss.com/"
                  className="font-semibold text-white text-base underline"
                  >
                    Tailwind
                  </LinkPreview>
                  {" "}
                   for the CSS framework,
                  and 
                  {" "}
                  <LinkPreview
                  url="https://www.framer.com/motion/"
                  className="font-semibold text-white text-base underline"
                  >
                    Framer Motion
                  </LinkPreview>
                  {" "}
                   for animations. The layout is inspired by designers
                   from 
                   {" "}
                   <LinkPreview
                   url="https://dribbble.com/"
                   className="font-semibold text-white text-base underline"
                   >
                    Dribbble
                   </LinkPreview>
                   {" "}
                   , and thanks to the developers for the components from open source.
            </div>
            <div className="flex flex-row items-center justify-center m-4 pe-8">
                <AnimatedTooltip items={links} />
            </div>
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2 p-4 lg:mx-4">
            <h1 className="text-white font-semibold text-base py-4">Get in touch</h1>
            <ul className="flex flex-col gap-4 text-sm">
                <li>Davao City</li>
                <li>+639777943791</li>
                <li>yhestin10@gmail</li>
            </ul>
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2 p-4 lg:mx-4">
            <h1 className="text-white font-semibold text-base py-4">Marketing</h1>
            <ul className="flex flex-col gap-4 text-sm">
                <li>Monolithic Website</li>
                <li>Micro Service Web App</li>
                <li>Programming Lessons</li>
                <li>Programming Projects</li>
                <li>Teaching Session</li>
            </ul>
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2 p-4 lg:mx-4">
            <h1 className="text-white font-semibold text-base py-4">Other Services</h1>
            <ul className="flex flex-col gap-4 text-sm">
                <li>Video Editing</li>
                <li>Photoshop</li>
                <li>Excel</li>
                <li>Words</li>
                <li>Powerpoint</li>
                <li>Virtual Assistant</li>
            </ul>
        </div>

        <div className="col-span-6 md:col-span-3 lg:col-span-2 p-4 lg:mx-4">
            <h1 className="text-white font-semibold text-base py-4">Web Services</h1>
            <ul className="flex flex-col gap-4 text-sm">
                <li>Frontend</li>
                <li>Backend</li>
                <li>Fullstack</li>
                <li>Per Page</li>
                <li>Bulk Project</li>
            </ul>
        </div>

        <div className="col-span-12 p-4 lg:mx-4 text-center">
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <p className="text-sm font-sans">© 2024 Developer, All rights reserved</p>
        </div>
    </div>
  )
}

const links = [
    {
        id: 1,
        name: "yhestinsyth.jamili",
        designation: "Facebook",
        image: path.facebook,
        link: "https://www.facebook.com/yhestinsyth.jamili"
    },
    {
        id: 2,
        name: "P4GASPAS",
        designation: "Github",
        image: path.github,
        link: "https://github.com/P4GASPAS"
    },
    {
        id: 3,
        name: "yhestinsyth",
        designation: "Instagram",
        image: path.instagram,
        link: "https://www.instagram.com/yhestinsyth/"
    },
    {
        id: 4,
        name: "JamiliSyth",
        designation: "Twitter",
        image: path.twitter,
        link: "https://x.com/JamiliSyth"
    },
    {
        id: 5,
        name: "yhestinsyth",
        designation: "Tiktok",
        image: path.tiktok,
        link: "https://www.tiktok.com/@yhestinsyth?_t=8oiwpEddekM&_r=1"
    },
    {
        id: 6,
        name: "yhestin10@gmail.com",
        designation: "Gmail",
        image: path.google,
        link: "https://www.google.com/"
    },
    // {
    //     id: 7,
    //     name: "Why are you gay",
    //     designation: "Onlyfans",
    //     image: path.onlyfans,
    //     link: "https://www.youtube.com/watch?v=DLzxrzFCyOs"
    // },
]

export default Footer