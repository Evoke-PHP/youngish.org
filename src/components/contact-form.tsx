import React, {FormEventHandler, useState} from 'react'

import './contact-form.scss'

export const ContactForm = (): JSX.Element => {
    const [message, setMessage] = useState("");
    const submitContact: FormEventHandler = e => {
        alert(message);
    };

    return (
        <section className="contact">
            <div className="contact-form">
                <h1>Contact Form</h1>
                <form onSubmit={submitContact}>
                    <p>Please contact me if you have any questions or comments.</p>
                    <textarea
                        cols={60}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Send me a message"
                        rows={5}
                    >{message}</textarea>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </section>
    )
}