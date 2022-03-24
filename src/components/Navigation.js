import React from 'react';

function Navigation({ handlePageChange }) {
    return (
        
            <nav class="navigation center-align col 12 grey darken-3">
                <button id="small-text" class="navbtn btn col 4 cyan darken-3 grey-text text-lighten-5" onClick={() => handlePageChange('AboutMe')}>
                    About Me
                </button>

                <button id="small-text" class="navbtn btn col 4 cyan darken-3 grey-text text-lighten-5" onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </button>

                <button id="small-text" class="navbtn btn col 4 cyan darken-3 grey-text text-lighten-5" onClick={() => handlePageChange('Contact')}>
                    Contact
                </button>

                <a id="small-text" class="navbtn btn col 4 cyan darken-3 grey-text text-lighten-5" href="https://docs.google.com/document/d/1IHctUDXitDshLIJZ_pgVyyoPuoAp94CtnxQC489VYgs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </nav>

    )
}

export default Navigation