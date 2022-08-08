import './SkillsModal.scss';
import close from '../../assets/icons/white-x.png';

function SkillsModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'skills display-flex' : 'skills display-none'}>
            <div className='skills__main'>
                <h2 className='skills__header'>Qualifications </h2>
                <img className='skills__close' src={close} alt='close' onClick={toggleModal}/>
                <div className='skills__creds'>
                    <div className='skills__ed'>
                        <h3 className='skills__ed-header'>Education</h3>
                    </div>
                    <div className='skills__exp'>
                        <h3 className='skills__exp-header'>Experience</h3>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default SkillsModal;