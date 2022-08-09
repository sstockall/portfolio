import './ProjectsModal.scss';
import close from '../../assets/icons/white-x.png';
import mimSnap from '../../assets/images/mim-snap.png';

function ProjectsModal({ show, toggleModal }) {
    
    return ( 
        <section className={show ? 'projects display-flex' : 'projects display-none'}>
            <div className='projects__main'>
                <h2 className='projects__header'>Stuff I've Done</h2>
                <img className='projects__close' src={close} alt='close' onClick={toggleModal}/>
                <div className='projects__lower'>
                    <div className='projects__project mim'>
                        <img className='projects__project-snap' src={mimSnap} alt='mim' />
                        <div className='projects__project-text'>
                            <h3 className='projects__project-header'>MolesInMotion</h3>
                            <p className='projects__project-stack'>
                                Tech Stack: 
                                <span className='projects__project-stack--purple'>
                                    React
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    Javascript
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    Node.js
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    Express.js
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    MySQL
                                </span>
                            </p>
                            <ul className='projects__project-des'>
                                <li>A mole tracking web app that allows users to log and track their skin profile</li>
                                <li>Built using functional components and React hooks</li>
                                <li>Uses SQL as database, and Cloudinary for image storage and persistence for record photos</li>
                            </ul>
                        </div>
                    </div>
                    <div className='projects__project instock'>
                        <img className='projects__project-snap' src={mimSnap} alt='mim' />
                        <div className='projects__project-text'>
                            <h3 className='projects__project-header'>InStock</h3>
                            <p className='projects__project-stack'>
                                Tech Stack: 
                                <span className='projects__project-stack--purple'>
                                    React
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    Javascript
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    Node.js
                                </span>,
                                <span className='projects__project-stack--purple'>
                                    Express.js
                                </span>
                            </p>
                            <ul className='projects__project-des'>
                                <li>Comprehensive inventory tracking system</li>
                                <li>Collaborative project including 2 other developers</li>
                                <li>Full CRUD operation range</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default ProjectsModal;