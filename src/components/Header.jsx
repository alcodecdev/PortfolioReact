import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header>
            <h1>Alejandro Asencio</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/about">Sobre mí</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </header>
    );
}