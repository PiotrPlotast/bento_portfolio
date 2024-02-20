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
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1564914816%2FChallenges%2Ftjmihf4uv326gkkz7mbk.jpg&w=384&q=75",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repository: "https://github.com/PiotrPlotast",
    livePreview: "https://www.google.com",
  },
  {
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1652196092%2FChallenges%2Fbnjpxmx9fudsmerfj6eo.jpg&w=384&q=75",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repository: "https://github.com/PiotrPlotast",
    livePreview: "https://www.google.com",
  },
  {
    image:
      "https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1554894929%2FChallenges%2Fqjiprcu1e19yvujjrflv.jpg&w=384&q=75",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    repository: "https://github.com/PiotrPlotast",
    livePreview: "https://www.google.com",
  },
];

export default function CarouselProjects() {
  return (
    <Carousel className="w-fit max-w-xs mx-auto my-4">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.title}>
            <div className="carousel__project">
              <img
                src={project.image}
                alt="image showing the project"
                className="object-cover mx-auto rounded-lg shadow-lg"
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
      <CarouselPrevious className="top-32" />
      <CarouselNext className="top-32" />
    </Carousel>
  );
}
