import './SkillsModal.scss';
import close from '../../assets/icons/close.svg';

function SkillsModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'skills display-flex' : 'skills display-none'}>
            <div className='skills__main'>
                <img className='skills__close' src={close} alt='close' onClick={toggleModal}/>
            </div>
        </section>
     );
}

export default SkillsModal;