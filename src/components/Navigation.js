import React from 'react';

function Navigation () {
    return (
        <nav class="navigation col 12 grey lighten-2">  
        <a id="small-text" class="col 4 light-blue-text text-darken-3" href="#about-me">
            &nbsp;&nbsp; About Me &nbsp;
        </a>
    
        <a id="small-text" class="col 4 light-blue-text text-darken-3" href="#work">
            &nbsp; Portfolio &nbsp;
        </a>
    
        <a id="small-text" class="col 4 light-blue-text text-darken-3" href="#contact-me">
            &nbsp; Contact &nbsp;
        </a>

        <a id="small-text" class="col 4 light-blue-text text-darken-3" href="https://docs.google.com/document/d/1IHctUDXitDshLIJZ_pgVyyoPuoAp94CtnxQC489VYgs/edit?usp=sharing">
            &nbsp; Resume &nbsp;
        </a> 
    </nav>
    )
}

export default Navigation