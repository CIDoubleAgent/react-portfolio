import React from 'react'

function Portfolio() {
    return (
        <div id="work" class="container portfolio-wrapper">

            {/* <h3 class="center-align cyan-text">
            Projects <i class="material-icons">folder</i>
            </h3> */}

            <section class="row">

            <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        Hungry Snake
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/hungry-snake/blob/main/images/hungry-snake_1.png?raw=true" alt="Snake" />
                        </div>
                        <div class="card-content white-text">
                            <p>A classic snake game built with Javascript. Higher difficulties increase snake speed and growth rate but reward more points.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text" href="https://cidoubleagent.github.io/hungry-snake/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/hungry-snake" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        Crypt-ID 2
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/react-portfolio/blob/main/src/components/images/Cryptid2_2.png?raw=true" alt="cryptid2" />
                        </div>
                        <div class="card-content white-text">
                            <p>Crypt-ID 2 is an updated version of the original cryptid concept built with REACT with a Focus on incorporating new features and improving the UI.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text" href="https://calm-tundra-54931.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/cryptid2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        Crypt-ID
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Crypt-ID_1.png?raw=true" alt="Crypt-Id" />
                        </div>
                        <div class="card-content white-text">
                            <p>Crypt-ID was designed for loging your strange experiences and reading about other peoples encounters.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text" href="https://sleepy-island-20575.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/Crypt-ID" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article>
                
                <article class="col s12 m8 offset-m2 l5">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        Weather Dashboard
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Weather%20Dash_2.png?raw=true" alt="Weather-Dashboard" />
                        </div>
                        <div class="card-content white-text">
                            <p>A weather app with current as well as five day forecasts. Displays weather data for a selected city.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text" href="https://cidoubleagent.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/weather-dashboard" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        App.Fix()
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/react-portfolio/blob/main/src/components/images/app.fix_1.png?raw=true" alt="App.Fix" />
                        </div>                  
                        <div class="card-content white-text">
                            <p>App.Fix is a tech blog app where people can post their tech issues and comment suggestions for solutions.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text" href="https://polar-refuge-49734.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/App.Fix" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        My Team Profile Generator
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/react-portfolio/blob/main/src/components/images/team-profile-generator.png?raw=true" alt="Team Profile Generator" />
                        </div>
                        <div class="card-content white-text">
                            <p>A back end application that generates a team profile based on user input.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text">No Deployed Version</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/My-Team-Profile-Generator" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article>
            </section>

            {/* <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="project-card black card hoverable">
                    <div class="card-title white-text">
                        Note Taker
                    </div>
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Note_Taker_3.png?raw=true" alt="Note-Taker" />
                        </div>
                        <div class="card-content white-text">
                            <p>A note taker App designed for simplicity, clarity and convenience. Add or delete your notes.</p>
                        </div>
                        <div class="card-action">
                            <a class="cyan-text" href="https://lit-fortress-73592.herokuapp.com/notes" target="_blank" rel="noopener noreferrer">Deployed Application</a>
                            <a class="cyan-text right" href="https://github.com/CIDoubleAgent/Note-Taker" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                </article> */}

        </div>

        
    )
    
}

export default Portfolio