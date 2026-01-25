export default function ProjectCard({title, description, image}){
    return (
      <article className="project-card">
          <img src={image} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
          <button>Ver más</button>
      </article>
    );
}