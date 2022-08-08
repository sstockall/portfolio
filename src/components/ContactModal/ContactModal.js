import './ContactModal.scss';
import close from '../../assets/icons/white-x.png';
import emailIcon from '../../assets/icons/email.png';
import liIcon from '../../assets/icons/linkedin.png';
import ghIcon from '../../assets/icons/github.png';
import axios from 'axios';
import { useState } from 'react';

function ContactModal({ show, toggleModal }) {
    const formId = 'nQOQpmU9';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const [message, setMessage] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        const payload = {
            message: e.target.message.value
        };
        axios.post(formSparkUrl, payload)
        .then (_res => {
            setMessage(`Thanks for getting in touch! Give me a couple days and I'll get back to you!`)
        })
        .catch(err => {
            console.error(err)
            setMessage(`Error: ${err}`)
        })
        e.target.reset();
        window.alert(message);
    }

    return ( 
        <section className={show ? 'contact display-flex' : 'contact display-none'}>
            <div className='contact__main'>
                <img className='contact__close' src={close} alt='close' onClick={toggleModal}/>
                <h2 className='contact__header'>Let's Chat</h2>
                <div className='contact__content'>
                    <div className='contact__links'>
                        <h3 className='contact__links-title'>Contact Info</h3>
                        <div className='contact__links-item'>
                            <h4 className='contact__links-header'>Email</h4>
                            <div className='contact__links-content'>
                                <img className='contact__links-img' src={emailIcon} alt='email' />
                                <span className='contact__links-link'>sam.stockall@hotmail.com</span>
                            </div>
                        </div>
                        <div className='contact__links-item'>
                            <h4 className='contact__links-header'>LinkedIn</h4>
                            <div className='contact__links-content'>
                                <img className='contact__links-img' src={liIcon} alt='email' />
                                <a className='contact__links-link' href='https://www.linkedin.com/in/samantha-stockall/'>linkedin.com/in/samantha-stockall</a>
                            </div>
                        </div>
                        <div className='contact__links-item'>
                            <h4 className='contact__links-header'>GitHub</h4>
                            <div className='contact__links-content'>
                                <img className='contact__links-img' src={ghIcon} alt='email' />
                                 <a className='contact__links-link' href='https://github.com/sstockall'>github.com/sstockall</a>
                            </div>
                        </div>
                    </div>
                    <form className='contact__form' onSubmit={submitForm}>
                        <h3 className='contact__form-header'>Drop a line!</h3>
                        <div className='contact__form-content'>
                            <div className='contact__form-field'>
                                <label>Name</label>
                                <input name='name'/>
                            </div>
                            <div className='contact__form-field'>
                                <label>Email</label>
                                <input name='email'/>
                            </div>
                            <div className='contact__form-field'>
                                <label>Message</label>
                                <textarea name='message'/>
                            </div>
                        </div>
                        <button className='contact__form-button'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
     );
}

export default ContactModal;