import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="home-container">
            <div className="hero-content">
                <h1>Hola, soy <span className="highlight">Alejandro Asencio</span></h1>
                <h2>Desarrollador Fullstack</h2>

                <p className="description">
                    Me especializo en crear interfaces web modernas, rápidas y accesibles.
                    Actualmente enfocado en construir soluciones eficientes con el ecosistema de Vite,React,Springboot...
                </p>
            </div>
        </section>
    );
}