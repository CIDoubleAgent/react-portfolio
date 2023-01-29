import React from 'react'

function AboutMe() {
    return (
            
        <div id="about-me" class="container">
            <h3 class="myName center-align white-text">
            {/* About Me <i class="material-icons">folder_shared</i> */}
            Nicholas Zabkar
            </h3>
            <section class="container col">
                <div class="card col s12 m9 black white-text">
                <div class="col s12 m3 center-align">
                    <img id="profile-image" src="https://github.com/CIDoubleAgent/Nicks-Web-Dev-Portfolio/blob/main/images/profilePicMe_1.jpg?raw=true" alt="Nicholas Zabkar" />
                </div>
                    <div class="bio flow-text">
                    I am a web developer from Dover New Hampshire and have been a carpenter by trade for most of my career. My hobbies include hiking the many beautiful trails and mountains of New Hampshire, playing basketball, wakeboarding, enjoying craft beer, and poking holes in movie plots.
                    </div>
                    <div class="skills flow-text">
                    Skills: I have experience with HTML 5, CSS 3, javascript ES6+, jQuery, SQL, GraphQL, Sass, node and React.<br></br>
                    Tools: React, Sass, Materialize, Mongodb, Express, Sequelize
                    </div>
                </div>
            </section>
        </div>
        
    )
    
}

export default AboutMe