import React from 'react'

function Contact() {
    return (

        <div id="contact-me">
            <h3 class="center-align light-blue-text text-darken-3">
            Contact Me <i class="material-icons">contact_mail</i>
            </h3>

            <section id="contact-info" class="center-align">
                <div class="col 12">
                    <a id="small-text" class="footer-text light-blue-text text-darken-3" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nzabkar51@gmail.com">
                        &nbsp; nzabkar51@gmail.com &nbsp;
                    </a>
                    <a id="small-text" class="footer-text light-blue-text text-darken-3" href="https://github.com/CIDoubleAgent">
                        &nbsp; GitHub &nbsp;
                    </a>
                    <a id="small-text" class="footer-text light-blue-text text-darken-3" href="https://www.linkedin.com/in/nicholas-zabkar-a730b457/">
                        &nbsp; LinkedIn &nbsp;
                    </a>
                </div>
            </section>

            <div id="contact-card-wrapper" class="row">
                <div class="col s12 m8 offset-m2 center-align">
                    <div class="card light-blue darken-3">
                        <div id="card-body" class="card-content white-text">
                            <span class="card-title">Leave a Message</span>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">account_circle</i>
                                <input placeholder="Name" id="name" type="text" data-length="30" class="validate" />
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input placeholder="Email" id="email" type="text" data-length="30" class="validate" />
                            </div>
                            <div class="input-field col s12">
                                <i class="material-icons prefix">message</i>
                                <input placeholder="Message" id="message" type="text" data-length="150" class="validate" />
                            </div>
                        </div>
                        <div class="card-action">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

export default Contact