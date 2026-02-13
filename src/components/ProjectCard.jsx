export default function ProjectCard({title, description, image, link}){
    return (
      <article className="project-card">
          <img src={image} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}
             target="_blank"
             rel="noopener noreferrer"
             className="btn-primary"
          >
              Ver Proyecto
          </a>
      </article>
    );
}