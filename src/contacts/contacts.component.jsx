import React from 'react';
import './contacts.css';

const Contacts = () => {
    function onsubmit() {
        document.getElementById('emailsent').innerHTML = "Email successfully sent!";
    }
    return(
        <div className='contacts'>
            <div className="form">
                <h4>Email</h4>
                <form action="mailto:edo99pal@gmail.com" method="post" onSubmit={ onsubmit }>
                    <input type="text" placeholder="Email" name="email" required/>
                    <input type="text" placeholder="Object" name="object" required/>
                    <p>Message</p>
                    <textarea name="message" required/>
                    <input type="submit" value="Submit" className="submit"/>
                    <p id="emailsent"></p>
                </form>
            </div>
        </div>
    );
}

export default Contacts;