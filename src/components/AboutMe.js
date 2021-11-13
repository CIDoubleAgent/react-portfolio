import React from 'react'

function AboutMe() {
    return (
            
        <div id="about-me" class="container">
            <h3 class="center-align light-blue-text text-darken-3">
            About Me <i class="material-icons">folder_shared</i>
            </h3>
            <section class="row valign-wrapper">
                <div class="col s12 m3">
                    <img id="profile-image" class="responsive-img circle hoverable" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/profilePicMe_1.jpg?raw=true" alt="Nicholas Zabkar" />
                </div>
                <div id="about-me-card" class="card hoverable col s12 m9">
                    <div class="bio">
                    BIO: I am a 35 year old web developer from Dover, NH and have been a carpenter by trade for most of my career. My hobbies include hiking the many beautiful trails and mountains of New Hampshire, playing basketball, cycling, wakeboarding, enjoying craft beer, and poking holes in movie plots.
                    </div>
                    <div class="skills">
                    Skills: I am proficient in html, css, javascript ES6+, jQuery, node, and SQL.
                    </div>
                </div>
            </section>
        </div>
        
    )
    
}

export default AboutMe