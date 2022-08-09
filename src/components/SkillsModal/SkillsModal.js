import './SkillsModal.scss';
import close from '../../assets/icons/white-x.png';
import educationIcon from '../../assets/icons/education.png';
import experienceIcon from '../../assets/icons/experience.png';
import skillsIcon from '../../assets/icons/skills.png';
import calendarIcon from '../../assets/icons/calendar.png';
import htmlIcon from '../../assets/icons/html5.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/JS.png';
import reactIcon from '../../assets/icons/react.png';
import nodeIcon from '../../assets/icons/nodejs.svg';
import sassIcon from '../../assets/icons/sass.svg';
import jwtIcon from '../../assets/icons/jwt.svg';
import knexIcon from '../../assets/icons/knex.svg';
import sqlIcon from '../../assets/icons/mysql-icon.svg';
import cloudinaryIcon from '../../assets/icons/cloudinary-icon.svg';

function SkillsModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'skills display-flex' : 'skills display-none'}>
            <div className='skills__main'>
                <h2 className='skills__header'>Qualifications </h2>
                <img className='skills__close' src={close} alt='close' onClick={toggleModal}/>
                <div className='skills__creds'>
                    <div className='skills__section'>
                        <h3 className='skills__section-header'>
                            Education
                            <img className='skills__section-img' src={educationIcon} alt='education' />
                        </h3>
                        <div className='skills__education'>
                            <h4 className='skills__ed-header'>
                                Diploma, Web Development - BrainStation
                            </h4>
                            <span className='skills__ed-date'>
                                <img className='skills__ed-img' src={calendarIcon} alt='cal' />
                                2022
                            </span>
                            <span className='skills__ed-descrip'>
                                Developed proficiency in efficient, full stack, responsive web development and programming. Primary language used was Javascript, frameworks included REACT.js and NODE.js.
                            </span>
                            <span className='skills__ed-descrip'>
                                4.0 GPA
                            </span>
                        </div>
                        <div className='skills__education'>
                            <h4 className='skills__ed-header'>
                                Diploma, Nursing - George Brown College
                            </h4>
                            <span className='skills__ed-date'>
                                <img className='skills__ed-img' src={calendarIcon} alt='cal' />
                                2017-2019
                            </span>
                            <span className='skills__ed-descrip'>
                                Nursing diploma
                            </span>
                            <span className='skills__ed-descrip'>
                                3.9 GPA, Health Science Program Valedictorian 
                            </span>
                        </div>
                    </div>
                    <div className='skills__section'>
                        <h3 className='skills__section-header'>
                            Experience
                            <img className='skills__section-img' src={experienceIcon} alt='experience' />
                        </h3>
                        <div className='skills__experience'>
                            <h4 className='skills__exp-header'>
                                Head Clinic Nurse - Dermetics 
                            </h4>
                            <span className='skills__exp-date'>
                                <img className='skills__ed-img' src={calendarIcon} alt='cal' />
                                2020-2022
                            </span>
                            <span className='skills__ed-descrip'>
                                Skills Stengthened: Leadership, Problem-Solving, Time Management, Attention to detail
                            </span>
                        </div>
                        <div className='skills__experience'>
                            <h4 className='skills__exp-header'>
                                Head Bartender - SIRCorp Restaurants
                            </h4>
                            <span className='skills__exp-date'>
                                <img className='skills__ed-img' src={calendarIcon} alt='cal' />
                                2013-2017
                            </span>
                            <span className='skills__exp-descrip'>
                                Skills Stengthened: Leadership, Teamwork, Communication
                            </span>
                        </div>
                    </div>
                    <div className='skills__section'>
                        <h3 className='skills__section-header'>
                            Skills
                            <img className='skills__section-img' src={skillsIcon} alt='skills' />
                        </h3>
                        <div className='skills__skills'>
                            <img className='skills__skills-img' src={htmlIcon} alt='html' />
                            <img className='skills__skills-img' src={cssIcon} alt='css' />
                            <img className='skills__skills-img' src={jsIcon} alt='js' />
                            <img className='skills__skills-img' src={reactIcon} alt='react' />
                            <img className='skills__skills-img' src={nodeIcon} alt='node' />
                            <img className='skills__skills-img' src={sassIcon} alt='sass' />
                            <img className='skills__skills-img' src={knexIcon} alt='knex' />
                            <img className='skills__skills-img' src={sqlIcon} alt='sql' />
                            <img className='skills__skills-img' src={jwtIcon} alt='jwt' />
                            <img className='skills__skills-img' src={cloudinaryIcon} alt='cloud' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default SkillsModal;