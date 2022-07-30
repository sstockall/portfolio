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
                <p className='home__main-text'>A full stack developer 💻  with a passion for sustainability and climate positive action🌱 
                </p>
            </section>
            <section className='home__navs'>
                <div className='home__navs-item home__navs--about' onClick={() => toggleModal(about, setAbout)}>
                    <AboutModal show={about} toggleModal={() => toggleModal(about, setAbout)} />
                    ABOUT
                </div>
                <div className='home__navs-item home__navs--projects' onClick={() => toggleModal(projects, setProjects)}>
                    <ProjectsModal show={projects} toggleModal={() => toggleModal(projects, setProjects)} />
                    PROJECTS
                </div>
                <div className='home__navs-item home__navs--skills' onClick={() => toggleModal(skills, setSkills)}>
                    <SkillsModal show={skills} toggleModal={() => toggleModal(skills, setSkills)} />
                    SKILLS
                </div>
                <div className='home__navs-item home__navs--contact' onClick={() => toggleModal(contact, setContact)}>
                    <ContactModal show={contact} toggleModal={() => toggleModal(contact, setContact)} />
                    CONTACT
                </div>
            </section>
        </main>
    );
}

export default HomePage;