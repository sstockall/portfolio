import './ContactModal.scss';
import close from '../../assets/icons/white-x.png';
import emailIcon from '../../assets/icons/email.png';
import liIcon from '../../assets/icons/linkedin.png';
import ghIcon from '../../assets/icons/github.png';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ContactModal({ show, toggleModal }) {
    const formId = 'nQOQpmU9';
    const formSparkUrl = `https://submit-form.com/${formId}`;

    const submitForm = (e) => {
        e.preventDefault();
        postSubmission();
    }

    const postSubmission = () => {
        const payload = {
            message: 'Worked'
        };
        axios.post(formSparkUrl, payload)
        .then (res => console.log(res))
        .catch(err => console.error(err))
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
                                <a className='contact__links-link' href='https://www.linkedin.com/in/samantha-stockall/'>https://www.linkedin.com/in/samantha-stockall</a>
                            </div>
                        </div>
                        <div className='contact__links-item'>
                            <h4 className='contact__links-header'>GitHub</h4>
                            <div className='contact__links-content'>
                                <img className='contact__links-img' src={ghIcon} alt='email' />
                                 <a className='contact__links-link' href='https://github.com/sstockall'>https://github.com/sstockall</a>
                            </div>
                        </div>
                    </div>
                    <form className='contact__form' onSubmit={submitForm}>
                        <h3 className='contact__form-header'>Drop a line!</h3>
                        <div className='contact__form-content'>
                            <div className='contact__form-field'>
                                <input name='name'/>
                                <label>Name</label>
                            </div>
                            <div className='contact__form-field'>
                                <input name='email'/>
                                <label>Email</label>
                            </div>
                            <div className='contact__form-field'>
                                <textarea name='message'/>
                                <label>Message</label>
                            </div>
                            <button className='contact__form-button'>SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
     );
}

export default ContactModal;