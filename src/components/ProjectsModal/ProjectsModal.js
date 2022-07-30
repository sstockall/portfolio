import './ProjectsModal.scss';
import close from '../../assets/icons/close.svg';

function ProjectsModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'projects display-flex' : 'projects display-none'}>
            <div className='projects__main'>
                <img className='projects__close' src={close} alt='close' onClick={toggleModal}/>
            </div>
        </section>
     );
}

export default ProjectsModal;