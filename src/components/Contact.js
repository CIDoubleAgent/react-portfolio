import React from 'react'

function Contact() {
    return (

        <div id="contact-me">
            <h3 class="center-align cyan-text text-darken-3">
            Contact Me <i class="material-icons">contact_mail</i>
            </h3>

            <section id="contact-info" class="center-align">
                <div class="col 12">
                    <a id="small-text" class="footer-text cyan-text text-darken-3" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nzabkar51@gmail.com">
                        &nbsp; nzabkar51@gmail.com &nbsp;
                    </a>
                </div>
            </section>

            {/* <div class="row">
                <div class="col s12 m8 l6 offset-m2 offset-l3 center-align">
                    <div class="card cyan darken-3">
                        <div id="card-body" class="card-content white-text">
                            <span class="card-title">Leave a Message</span>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <input placeholder="Name" id="name" type="text" data-length="30" class="validate white-text" />
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input placeholder="Email" id="email" type="text" data-length="30" class="validate white-text" />
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">message</i>
                                <input placeholder="Message" id="message" type="text" data-length="150" class="validate white-text" />
                            </div>
                        </div>
                        <div class="card-action">
                            <button class="btn grey lighten-3 cyan-text text-darken-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    )
    
}

export default Contact