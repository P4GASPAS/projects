import Image from "next/image";
import React from "react";
import { AppleCard } from "@/components/ui/appleCard";
import path from "@/public/projects/path.json"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const Projects = () => {


  return (

    <div className="w-full p-[4%] bg-black text-white">
      <div className="relative px-8 text-center">
        <h1 className="text-4xl tracking-wide font-medium">Featured Projects</h1>
        <p className="my-4">
          Explore my side projects that highlight personal
          creativity and exploration. Each one reflects my
          enthusiasm for experimenting with new ideas and
          skills.
        </p>
      </div>

      <div className="flex py-12 my-2 w-full">

        <FeatureLayout/>

      </div>
    </div>

  );
}

const FeatureLayout = () => {

  const cards = features.map((feature, index) => (
    <AppleCard key={index} card={feature} index={index} />
  ))

  return (
    <ResizablePanelGroup
    direction="vertical"
    className="w-full min-h-[350vh] rounded-lg border"
    >

      <ResizablePanel defaultSize={20} minSize={20} maxSize={20}>
        <ResizablePanelGroup direction="horizontal">
          {cards[0]}
          <ResizableHandle/>
          <ResizablePanel defaultSize={40} minSize={40} maxSize={40}>
            <ResizablePanelGroup direction="vertical">
              {cards[1]}
              <ResizableHandle/>
              {cards[2]}
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle/>

      <ResizablePanel defaultSize={20} minSize={20} maxSize={20}>
        <ResizablePanelGroup direction="horizontal">
          {cards[3]}
          <ResizableHandle/>
          {cards[4]}
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle/>

      <ResizablePanel defaultSize={20} minSize={20} maxSize={20}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={40} minSize={40} maxSize={40}>
            <ResizablePanelGroup direction="vertical">
              {cards[5]}
              <ResizableHandle/>
              {cards[6]}
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle/>
          {cards[7]}
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle/>

      <ResizablePanel defaultSize={20} minSize={20} maxSize={20}>
        <ResizablePanelGroup direction="horizontal">
          {cards[8]}
          <ResizableHandle/>
          {cards[9]}
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle/>

      <ResizablePanel defaultSize={20} minSize={20} maxSize={20}>
        <ResizablePanelGroup direction="horizontal">
          {cards[10]}
          <ResizableHandle/>
          <ResizablePanel defaultSize={40} minSize={40} maxSize={40}>
            <ResizablePanelGroup direction="vertical">
              {cards[11]}
              <ResizableHandle/>
              {cards[12]}
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

    </ResizablePanelGroup>
  )
}

const AppleCardContent = ({
  date,
  tech,
  desc,
  images
}: {
  date: string;
  tech: string;
  desc: string;
  images: string[];
}) => {

  return (
    <div
      key={1}
      className="bg-neutral-800 p-6 md:p-10 rounded-2xl mb-2"
    >
      <p className="text-neutral-300 font-semibold">Date: {date}</p>
      <p className="text-neutral-300 font-semibold">Tech: {tech}</p>
      <p className="text-neutral-400 font-sans max-w-5xl mx-auto pb-4">
        {desc}
      </p>
      <p className="text-lg pt-4 pb-2 text-neutral-300">Snapshots:</p>
      <div>

        <Carousel
          opts={{align: "start", loop: true}}
          className="w-[90%] aspect-square items-center mx-auto"
        >
          <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
            <Card className="bg-neutral-800">
              <CardContent className="flex h-[30vh] md:h-[80vh] items-center justify-center p-0 md:p-2">
                <ScrollArea className="w-full h-full">
                <Image
                  src={img}
                  alt="Macbook mockup from Aceternity UI"
                  height="800"
                  width="800"
                  className="w-full h-full mx-auto object-cover object-left-top rounded-lg"
                />
                </ScrollArea>
              </CardContent>
            </Card>
          </CarouselItem>
          ))}
          </CarouselContent>

          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />

        </Carousel>

      </div>
    </div>
  );
};

const features = [
    {
      title: "Monolithic Medical Appointment Web",
      overview: "Built and managed a scalable full-stack web app with Laravel, optimizing performance and user experience.",
      src: path.laravelClinic1,
      cardType: "wide",
      content: <AppleCardContent
      date="01-24 · 06-24"
      tech="Laravel, Mysql"
      desc="Developed and maintained a full-stack web application using Laravel, integrating both front-end and back-end components to deliver a seamless user experience. Leveraged Laravel's robust features to optimize performance and ensure scalability of the application."
      images={[path.laravelClinic1, path.laravelClinic2, path.laravelClinic3]}
      />
    },
    {
      title: "Low level programming",
      overview: "Developed an efficient Ohm's Law calculator in assembly language, highlighting skills in low-level programming and optimization.",
      src: path.asm,
      cardType: "box",
      content: <AppleCardContent
      date="01-22 · 05-22"
      tech="Assembly"
      desc="Developed an efficient Ohm's Law calculator using assembly language, demonstrating proficiency in low-level programming and optimization techniques. The project showcases my ability to design and implement precise mathematical computations within a constrained environment."
      images={[path.asm, path.ohms]}
      />
    },
    {
      title: "Payment API",
      overview: "Designed and implemented secure Laravel APIs for payment processing, integrating with payment gateways and ensuring compliance with industry standards for handling sensitive financial data.",
      src: path.api,
      cardType: "box",
      content: <AppleCardContent
      date="03-24 · 05-24"
      tech="Laravel, Nodejs, Strip, Paymongo"
      desc="Designed and implemented secure Laravel APIs for payment processing, integrating with various payment gateways to facilitate seamless transactions. Ensured compliance with industry standards and best practices for handling sensitive financial data."
      images={[path.api]}
      />
    },
    {
      title: "Vehicle Registration System",
      overview: "Developed a Java vehicle registration system with a GUI and local storage, streamlining license plate management and showcasing skills in Java, UI design, and data management.",
      src: path.javaCar1,
      cardType: "mid",
      content: <AppleCardContent
      date="01-22 · 03-22"
      tech="Java, Swing"
      desc="Created a Java-based vehicle registration system featuring a graphical user interface (GUI) and local storage, streamlining the process of recording and managing vehicle license plate numbers. This project highlights my skills in Java development, UI design, and data management."
      images={[path.javaCar1, path.javaCar2]}
      />
    },
    {
      title: "E-commerce software",
      overview: "Created a Java e-commerce dashboard for managing inventory, orders, and sales, highlighting expertise in Java, UI design, and data visualization.",
      src: path.javaEcommerce1,
      cardType: "mid",
      content: <AppleCardContent
      date="07-22 · 11-22"
      tech="Java, Swing, Canvas"
      desc="Developed a Java-based e-commerce dashboard with dynamic features for managing inventory, processing orders, and analyzing sales data. This project underscores my expertise in Java development, user interface design, and data visualization."
      images={[path.javaEcommerce1, path.javaEcommerce2]}
      />
    },
    {
      title: "Custom AI model",
      overview: "Customized TensorFlow models like ResNet, EfficientNet, and Xception to improve performance on custom datasets, showcasing expertise in deep learning model optimization.",
      src: path.pythonAI,
      cardType: "box",
      content: <AppleCardContent
      date="05-23 · 12-23"
      tech="Python, Tensorflow"
      desc="Customized TensorFlow models such as ResNet, EfficientNet, and Xception to enhance performance on custom datasets, demonstrating proficiency in deep learning model adaptation and optimization. This experience underscores my ability to tailor advanced neural networks for specific data and application needs."
      images={[path.pythonAI]}
      />
    },
    {
      title: "Crud API w/ bulk insertion",
      overview: "Developed and maintained a full-stack web application with Laravel, featuring CRUD APIs and bulk insertion for efficient data management.",
      src: path.api,
      cardType: "box",
      content: <AppleCardContent
      date="03-24 · 03-24"
      tech="Laravel, Nodejs"
      desc="Developed and maintained a full-stack web application using Laravel, including CRUD APIs with bulk insertion for efficient data management."
      images={[path.api]}
      />
    },
    {
      title: "SSR + SSG Web app",
      overview: "Developed web clients using SSR, SSG, and ISG to improve performance and SEO with advanced rendering techniques.",
      src: path.nextLanding,
      cardType: "wide",
      content: <AppleCardContent
      date="03-24 · 07-24"
      tech="Nextjs, MongoDB"
      desc="Developed web clients using Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Generation (ISG) to explore and implement various rendering patterns. Enhanced application performance and SEO by leveraging these advanced rendering techniques for dynamic and static content delivery."
      images={[path.nextLanding, path.nextDashboard]}
      />
    },
    {
      title: "2D Java Game",
      overview: "Created a Java-based 2D Pokémon-inspired game using OOP principles for interactive gameplay and asset management, showcasing skills in game development and graphics programming.",
      src: path.javaGame,
      cardType: "mid",
      content: <AppleCardContent
      date="06-22 · 09-22"
      tech="Java"
      desc="Created a Java-based 2D Pokémon-inspired game that leverages object-oriented programming (OOP) principles to design interactive gameplay and manage game assets. This project highlights my skills in game development, OOP design, and graphics programming."
      images={[path.javaGame]}
      />
    },
    {
      title: "Oauth API",
      overview: "Implemented PKCE in Laravel and Node.js to secure OAuth authorization codes and authentication flows.",
      src: path.nextSignup,
      cardType: "mid",
      content: <AppleCardContent
      date="05-24 · 06-24"
      tech="Laravel, Axios, Nodejs"
      desc="Implemented PKCE for OAuth API security in both Laravel and Node.js applications, enhancing the protection of authorization codes during exchange. Developed and integrated secure authentication flows, leveraging PKCE to safeguard against common vulnerabilities in public clients."
      images={[path.nextSignup, path.nextLogin]}
      />
    },
    {
      title: "Raw Tailwind CSS",
      overview: "Designed responsive, visually appealing UIs with Tailwind CSS and its frameworks, using utility-first principles for efficient and customizable design.",
      src: path.tailwindGame,
      cardType: "wide",
      content: <AppleCardContent
      date="11-23 · 12-23"
      tech="React, Tailwind"
      desc="Designed responsive and visually appealing user interfaces using Tailwind CSS and various Tailwind-based frameworks. Leveraged utility-first CSS principles to create consistent and customizable design elements efficiently."
      images={[path.tailwindGame]}
      />
    },
    {
      title: "Python automation testing",
      overview: "Used Python and Selenium for web scraping, automating data extraction from dynamic sites and handling complex interactions, demonstrating skills in web automation and data collection.",
      src: path.pythonAI,
      cardType: "box",
      content: <AppleCardContent
      date="02-23 · 03-23"
      tech="Python, Selenium"
      desc= "Utilized Python with Selenium for web scraping, automating data extraction from dynamic websites and handling complex interactions. This experience highlights my skills in web automation, data collection, and handling real-time web content."
      images={[path.pythonAI]}
      />
    },
    {
      title: "Websocket API",
      overview: "Developed a Laravel API for WebSocket communication, enabling real-time data exchange and interactive features to boost application responsiveness and user engagement.",
      src: path.api,
      cardType: "box",
      content: <AppleCardContent
      date="01-24 · 01-24"
      tech="Laravel, Axios, Pusher, Nodejs"
      desc="Developed a Laravel API to facilitate WebSocket communication, enabling real-time data exchange and interactive features. Implemented robust WebSocket endpoints to enhance application responsiveness and user engagement."
      images={[path.api]}
      />
    },
  ];

export default Projects
