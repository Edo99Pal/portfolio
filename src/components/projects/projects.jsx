import './projects.scss';

function Projects() {
    return(
        <section id="projects">
            <h2>Projects</h2>
            <a href="https://edo99pal.github.io/urban-nest/" target="_blank" rel="noreferrer">
                <div className="project">
                    <div className="details">
                        <h3>Urban Nest</h3>
                        <img src="images/urban-nest.png" alt="Urban Nest"/>
                    </div>
                    <div class="desc">
                        <ul>
                            <li>Angular</li>
                            <li>SCSS</li>
                            <li>Angular Forms</li>
                            <li>Angular Material</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                </div>
                <a href="https://edo99pal.github.io/urban-nest/" target="_blank" rel="noreferrer" className="link">Link</a>
            </a>
            <a href="https://edo99pal.github.io/crwn-clothing/" target="_blank" rel="noreferrer">
                <div className="project">
                    <div className="details">
                        <h3>Crwn Clothing</h3>
                        <img src="images/crwn-clothing.png"  alt="Crwn Clothing"/>
                    </div>
                    <div class="desc">
                        <ul>
                            <li>React</li>
                            <li>SCSS</li>
                            <li>Bootstrap</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                </div>
                <a href="https://edo99pal.github.io/crwn-clothing/" target="_blank" rel="noreferrer" className="link">Link</a>
            </a>
            <a href="https://edo99pal.github.io/luxury-retreat/" target="_blank" rel="noreferrer">
                <div className="project">
                    <div className="details">
                        <h3>Luxury Retreat</h3>
                        <img src="images/luxury-retreat.png" alt="Luxury Retreat"/>
                    </div>
                    <div class="desc">
                        <ul>
                            <li>Angular</li>
                            <li>SCSS</li>
                            <li>Angular Material</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                </div>
                <a href="https://edo99pal.github.io/luxury-retreat/" target="_blank" rel="noreferrer" className="link">Link</a>
            </a>
            <a href="https://edo99pal.github.io/verve/" target="_blank" rel="noreferrer">
                <div className="project">
                    <div className="details">
                        <h3>Vérve</h3>
                        <img src="images/verve.png" alt="Verve"/>
                    </div>
                    <div class="desc">
                        <ul>
                            <li>Angular</li>
                            <li>SCSS</li>
                            <li>Angular Forms</li>
                            <li>Angular Material</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                </div>
                <a href="https://edo99pal.github.io/verve/" target="_blank" rel="noreferrer" className="link">Link</a>
            </a>
        </section>
    )
}

export default Projects;