import React from 'react'

function Portfolio() {
    return (
        <div id="work" class="portfolio-wrapper">

            <h3 class="center-align light-blue-text text-darken-3">
            Portfolio <i class="material-icons">folder</i>
            </h3>

            <section class="row">
                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Crypt-ID_1.png?raw=true" alt="Crypt-Id" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Crypt-ID</span>
                        <div class="card-content">
                            <p>Crypt-ID was designed for loging your strange experiences and reading about other peoples encounters.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://sleepy-island-20575.herokuapp.com/">Deployed Application</a>
                            <a class="right" href="https://github.com/CIDoubleAgent/Crypt---ID">GitHub Repository</a>
                        </div>
                    </div>
                </article>
                
                <article class="col s12 m8 offset-m2 l5">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Kan(way)e_1.png?raw=true" alt="Kanwaye" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Kan(way)e</span>
                        <div class="card-content">
                            <p>An app for finding new music by genre, or alternatively just Kanye West songs.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://kelley-mcd.github.io/STANK-Music/">Deployed Application</a>
                            <a class="right" href="https://github.com/CIDoubleAgent/STANK-Music">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Weather%20Dash_2.png?raw=true" alt="Weather-Dashboard" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Weather Dashboard</span>
                        <div class="card-content card-content-weather">
                            <p>A weather app with current as well as five day forecasts. Displays weather data for a selected city.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://cidoubleagent.github.io/weather-dashboard/">Deployed Application</a>
                            <a class="right" href="https://github.com/CIDoubleAgent/weather-dashboard">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/Note_Taker_3.png?raw=true" alt="Note-Taker" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">Note Taker</span>
                        <div class="card-content">
                            <p>A note taker App designed for simplicity, clarity and convenience. Add or delete your notes.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://lit-fortress-73592.herokuapp.com/notes">Deployed Application</a>
                            <a class="right" href="https://github.com/CIDoubleAgent/Note-Taker">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5 offset-l1">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/react-portfolio/blob/main/src/components/images/app.fix_1.png?raw=true" alt="App.Fix" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">`App.Fix()`</span>
                        <div class="card-content">
                            <p>App.Fix is a tech blog app where people can post their tech issues and comment suggestions for solutions.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://obscure-citadel-44297.herokuapp.com/">Deployed Application</a>
                            <a class="right" href="https://github.com/CIDoubleAgent/App.Fix">GitHub Repository</a>
                        </div>
                    </div>
                </article>

                <article class="col s12 m8 offset-m2 l5">
                    <div class="card hoverable">
                        <div class="card-image">
                            <img id="thumbnail" class="responsive-img" src="https://github.com/CIDoubleAgent/react-portfolio/blob/main/src/components/images/team-profile-generator.png?raw=true" alt="Team Profile Generator" />
                        </div>
                        <span class="card-title light-blue-text text-darken-3">My Team Profile Generator</span>
                        <div class="card-content">
                            <p>A back end application that generates a team profile based on user input.</p>
                        </div>
                        <div class="card-action">
                            <a href="/">Deployed Application</a>
                            <a class="right" href="https://github.com/CIDoubleAgent/My-Team-Profile-Generator">GitHub Repository</a>
                        </div>
                    </div>
                </article>
            </section>

        </div>

        
    )
    
}

export default Portfolio