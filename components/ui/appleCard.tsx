"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { ResizablePanel } from "@/components/ui/resizable"

interface Card {
  title: string;
  overview: string;
  src: string;
  cardType: string;
  content: React.ReactNode;
};

export const AppleCard = ({
  card,
  index,
}: {
  card: Card;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl mx-auto bg-neutral-900 h-fit z-[60] my-8 p-2 md:p-8 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-6 md:h-8 w-6 md:w-8 right-0 ml-auto bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-4 md:h-6 w-4 md:w-6 text-neutral-900" />
              </button>
              <motion.p
                className="text-xl md:text-2xl font-semibold text-white mt-2"
              >
                {card.title}
              </motion.p>
              <div className="py-6">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {card.cardType == "wide" && <WideCard
        title={card.title}
        overview={card.overview}
        src={card.src}
        handleOpen={handleOpen}
      />}

      {card.cardType == "box" && <BoxCard
        title={card.title}
        overview={card.overview}
        src={card.src}
        handleOpen={handleOpen}
      />}

      {card.cardType == "mid" && <MidCard
        title={card.title}
        overview={card.overview}
        src={card.src}
        handleOpen={handleOpen}
      />}

    </>
  );
};

const WideCard = ({
  title,
  overview,
  src,
  handleOpen
}: {
  title: string;
  overview: string;
  src: string;
  handleOpen: ()=>void;
}) => {

  return (
    <ResizablePanel defaultSize={60} minSize={60} maxSize={60}>
    <motion.button
      onClick={handleOpen}
      className="bg-neutral-800 p-4 w-full overflow-y-hidden"
    >
      <div className="p-4">
        <motion.p
          className="text-lg tracking-widest text-left"
        >
          {title}
        </motion.p>
        <motion.p
          className="text-neutral-500 text-left"
        >
          {overview}
        </motion.p>
      </div>
      <div className="flex justify-end w-full p-4">
        <BlurImage
          src={src}
          alt={title}
          priority={true}
          loading="eager"
          width={800}
          height={800}
          className="object-cover object-top opacity-100 hover:opacity-70 rounded h-[70vh]"
        />
      </div>
    </motion.button>
    </ResizablePanel>
  )
}

const BoxCard = ({
  title,
  overview,
  src,
  handleOpen
}: {
  title: string;
  overview: string;
  src: string;
  handleOpen: ()=>void;
}) => {

  return (
    <ResizablePanel defaultSize={50} minSize={50} maxSize={50}>
    <motion.button
      onClick={handleOpen}
      className="bg-neutral-800 w-full h-full"
    >
      <div className="p-4">
        <motion.p
          className="text-lg tracking-widest text-left"
        >
          {title}
        </motion.p>
        <motion.p
          className="text-neutral-500 text-left"
        >
          {overview}
        </motion.p>
      </div>
      <div className="flex justify-start w-full overflow-hidden">
        <BlurImage
          src={src}
          alt={title}
          width={800}
          height={800}
          className="object-cover object-top opacity-80 rounded w-full h-full"
        />
      </div>
    </motion.button>
    </ResizablePanel>
  )
}

const MidCard = ({
  title,
  overview,
  src,
  handleOpen
}: {
  title: string;
  overview: string;
  src: string;
  handleOpen: ()=>void;
}) => {

  return (
    <ResizablePanel defaultSize={50} minSize={50} maxSize={50}>
    <motion.button
      onClick={handleOpen}
      className="bg-neutral-800 p-4 w-full overflow-y-hidden"
    >
      <div className="p-4">
        <motion.p
          className="text-lg tracking-widest text-left"
        >
          {title}
        </motion.p>
        <motion.p
          className="text-neutral-500 text-left"
        >
          {overview}
        </motion.p>
      </div>
      <div className="flex justify-end w-full pt-2">
        <BlurImage
          src={src}
          alt={title}
          width={800}
          height={800}
          className="object-scale-down object-left-top opacity-90 blur-none hover:blur-sm transition-all duration-200 rounded h-[70vh]"
        />
      </div>
    </motion.button>
    </ResizablePanel>
  )
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300 object-left-top",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
