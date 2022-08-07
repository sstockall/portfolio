import './SkillsModal.scss';
import close from '../../assets/icons/white-x.png';

function SkillsModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'skills display-flex' : 'skills display-none'}>
            <div className='skills__main'>
                <img className='skills__close' src={close} alt='close' onClick={toggleModal}/>
                <div className='about__creds'>
                    <div className='about__education'>
                        <h4 className='about__header'>Education</h4>
                    </div>
                    <div className='about__experience'>
                        <h4 className='about__header'>Experience</h4>
                    </div>
                    <div className='about__interests'>
                        <h4 className='about__header'>Interests</h4>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default SkillsModal;