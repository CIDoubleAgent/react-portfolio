import React from 'react';

function Navigation({ handlePageChange }) {
    return (
        
            <div class="navigation center-align col 12">
                <button id="small-text" class="navbtn btn col 4 black cyan-text" onClick={() => handlePageChange('AboutMe')}>
                    About Me
                </button>

                <button id="small-text" class="navbtn btn col 4 black cyan-text" onClick={() => handlePageChange('Portfolio')}>
                    Projects
                </button>

                <button id="small-text" class="navbtn btn col 4 black cyan-text" onClick={() => handlePageChange('Contact')}>
                    Contact
                </button>

                <a id="small-text" class="navbtn btn col 4 black cyan-text" href="https://docs.google.com/document/d/1IHctUDXitDshLIJZ_pgVyyoPuoAp94CtnxQC489VYgs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>

    )
}

export default Navigation