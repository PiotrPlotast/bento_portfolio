import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Github, MonitorSmartphone } from "lucide-react";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/imk15xu66g4awbsylgsi.jpg",
    title: "Markdown editor web app",
    description: "Markdown editor web app made with React.",
    repository: "https://github.com/PiotrPlotast/markdown-editor-web-app",
    livePreview: "https://markdown-editor-web-app.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vccuroyji9nqbuffdch6.jpg",
    title: "Dictionary web app",
    description: "Dictionary web app made with React + Tailwindcss.",
    repository: "https://github.com/PiotrPlotast/dictionary-web-app",
    livePreview: "https://piotrplotast.github.io/dictionary-web-app/",
  },
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/thcmrk07xdvnzf8qtay3.jpg",
    title: "Job listings with filtering",
    description: "Job listings with filtering made with React.",
    repository: "https://github.com/PiotrPlotast/job-listings-with-filtering",
    livePreview: "https://piotrplotast.github.io/job-listings-with-filtering/",
  },
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wwrbx1zs3x2wiferhyaw.jpg",
    title: "Typemaster pre launch landing page",
    description: "Typemaster pre launch landing page made with HTML + SASS.",
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
                alt=""
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
