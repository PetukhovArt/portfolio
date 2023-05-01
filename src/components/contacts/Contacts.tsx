import React, {FormEvent, useState} from 'react';
import s from './Contacts.module.css'
import style from '../../common/styles/container.module.css'
import {Button} from '../button/Button';


export const Contacts = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
    };

    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <h2 className={s.header}>Let's work together.</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            placeholder={'Name*'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder={'Email*'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            value={message}
                            placeholder={'Your Message*'}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <div className={s.button}>
                        <Button text={'Sent'} width={'120px'} height={'40px'}/>
                    </div>
                </form>
            </div>
        </div>
    );
}


