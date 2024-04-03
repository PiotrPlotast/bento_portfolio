import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Github, MonitorSmartphone } from "lucide-react";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vccuroyji9nqbuffdch6.jpg",
    title: "Dictionary web app",
    description:
      "Dictionary web app - frontend mentor project made with React + Tailwindcss.",
    repository: "https://github.com/PiotrPlotast/dictionary-web-app",
    livePreview: "https://piotrplotast.github.io/dictionary-web-app/",
  },
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/xiydlw7ggmnfnldlflit.jpg",
    title: "Clipboard landing page",
    description:
      "Clipboard landing page frontend mentor project using tailwindcss.",
    repository: "https://github.com/PiotrPlotast/clipboard-landing-page",
    livePreview: "https://piotrplotast.github.io/clipboard-landing-page/",
  },
  {
    image:
      "https://i.ibb.co/dmNdNqR/296444055-30f4e74c-ace2-4b0d-87f0-70fb7a45fab4.png",
    title: "Interactive Eisenhower Matrix",
    description:
      "Interactive Eisenhower Matrix is a web app in which you can categorize, manage and save your tasks between sessions.",
    repository: "https://github.com/PiotrPlotast/interactive-eisenhower-matrix",
    livePreview:
      "https://piotrplotast.github.io/interactive-eisenhower-matrix/",
  },
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wwrbx1zs3x2wiferhyaw.jpg",
    title: "(WIP) Typemaster pre launch landing page",
    description: "Typemaster pre launch landing page frontend mentor project.",
    repository:
      "https://github.com/PiotrPlotast/typemaster-pre-launch-landing-page",
    livePreview:
      "https://piotrplotast.github.io/typemaster-pre-launch-landing-page/",
  },
];

export default function CarouselProjects() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="mx-auto my-4"
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.title}>
            <div className="max-w-[35rem] mx-auto">
              <img
                src={project.image}
                alt="image showing the project"
                className="mx-auto max-w-[90%] rounded-lg shadow-lg"
              />
              <h3 className="text-center py-4 font-bold text-xl">
                {project.title}
              </h3>
              <p className="text-center">{project.description}</p>
              <div className="flex justify-around my-4">
                <a
                  target="blank"
                  href={project.repository}
                  aria-label="link to project's repository"
                >
                  <Github />
                </a>
                <a
                  target="blank"
                  href={project.livePreview}
                  aria-label="link to project's live preview"
                >
                  <MonitorSmartphone />
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className=" top-1/2 hidden sm:scale-150 sm:flex " /> */}
      {/* <CarouselNext className="top-1/2 hidden sm:scale-150 sm:flex" /> */}
    </Carousel>
  );
}
