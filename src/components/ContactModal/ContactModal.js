import './ContactModal.scss'
import close from '../../assets/icons/close.svg'

function ContactModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'contact display-flex' : 'contact display-none'}>
            <div className='contact__main'>
                <img className='contact__close' src={close} alt='close' onClick={toggleModal}/>
            </div>
        </section>
     );
}

export default ContactModal;