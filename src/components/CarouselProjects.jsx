import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Github, MonitorSmartphone } from "lucide-react";

const projects = [
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
      "https://private-user-images.githubusercontent.com/89207478/296444055-30f4e74c-ace2-4b0d-87f0-70fb7a45fab4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg1MzIwNzgsIm5iZiI6MTcwODUzMTc3OCwicGF0aCI6Ii84OTIwNzQ3OC8yOTY0NDQwNTUtMzBmNGU3NGMtYWNlMi00YjBkLTg3ZjAtNzBmYjdhNDVmYWI0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjIxVDE2MDkzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2NjY4NTliNGQzYzViNTdmOGNhNWM0ZjViNmYzNDE0MmRiMWU1NzE0NDgyN2FiOTk1OTRmNTUyOGU1NWIyMWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.V1avLmGSWLUmgKIgTG9y3i369g8yTWEWUu50NA4S-ko",
    title: "Interactive Eisenhower Matrix",
    description:
      "Interactive Eisenhower Matrix is a web app in which you can categorize, manage and save your tasks between sessions.",
    repository: "https://github.com/PiotrPlotast/interactive-eisenhower-matrix",
    livePreview: "https://piotrplotast.github.io/interactive-eisenhower-matrix/",
  },
  {
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wwrbx1zs3x2wiferhyaw.jpg",
    title: "(WIP) Typemaster pre launch landing page",
    description:
      "Typemaster pre launch landing page frontend mentor project.",
    repository: "https://github.com/PiotrPlotast/typemaster-pre-launch-landing-page",
    livePreview: "https://piotrplotast.github.io/typemaster-pre-launch-landing-page/",
  },
];

export default function CarouselProjects() {
  return (
    <Carousel className="max-w-full  mx-auto my-4">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.title}>
            <div className=" md:max-w-96 mx-auto">
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
                <a href={project.repository}>
                  <Github />
                </a>
                <a href={project.livePreview}>
                  <MonitorSmartphone />
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className=" top-1/2 sm:scale-150" /> */}
      {/* <CarouselNext className="top-1/2 sm:scale-150" /> */}
    </Carousel>
  );
}
