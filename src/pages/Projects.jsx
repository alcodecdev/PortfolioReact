import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
    return (
      <section>
          <h2>Proyectos</h2>

          {
              projects.map((project) => (
                  <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  />
              ))
          }
      </section>
    );
}