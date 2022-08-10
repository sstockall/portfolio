import { useState } from 'react';
import AboutModal from '../../components/AboutModal/AboutModal';
import SkillsModal from '../../components/SkillsModal/SkillsModal';
import ProjectsModal from '../../components/ProjectsModal/ProjectsModal';
import ContactModal from '../../components/ContactModal/ContactModal';
import avatar from '../../assets/images/avatar.png'
import './HomePage.scss'

function HomePage() {

    const [about, setAbout] = useState(false);
    const [projects, setProjects] = useState(false);
    const [skills, setSkills] = useState(false);
    const [contact, setContact] = useState(false);

    const toggleModal = (state, setFunc) => {
        !state ? setFunc(true) : setFunc(false);
    }

    return ( 
        <main className='home'> 
            <section className='home__main'>
                <h1 className='home__main-header'>
                    hi! I'm SAMANTHA
                    <img className='home__main-avatar' src={avatar} alt='avatar' />
                    </h1>
                <p className='home__main-text'>A full stack developer 💻  <br/> with a passion for sustainability <br /> and climate positive action🌱 
                </p>
            </section>
            <section className='home__navs'>
                <div className='home__navs-item home__navs--about'>
                    <AboutModal show={about} toggleModal={() => toggleModal(about, setAbout)} />
                    <h6 className='home__navs-span' onClick={() => toggleModal(about, setAbout)}>ABOUT</h6>
                </div>
                <div className='home__navs-item home__navs--projects'>
                    <ProjectsModal show={projects} toggleModal={() => toggleModal(projects, setProjects)} />
                    <h6 className='home__navs-span' onClick={() => toggleModal(projects, setProjects)}>PROJECTS</h6>
                </div>
                <div className='home__navs-item home__navs--skills'>
                    <SkillsModal show={skills} toggleModal={() => toggleModal(skills, setSkills)} />
                    <h6 className='home__navs-span' onClick={() => toggleModal(skills, setSkills)}>SKILLS</h6>
                </div>
                <div className='home__navs-item home__navs--contact'>
                    <ContactModal show={contact} toggleModal={() => toggleModal(contact, setContact)} />
                    <h6 className='home__navs-span' onClick={() => toggleModal(contact, setContact)}>CONTACT</h6>
                </div>
            </section>
        </main>
    );
}

export default HomePage;