import './AboutModal.scss'
import close from '../../assets/icons/white-x.png';
import profile from '../../assets/images/profile.jpeg';
import { saveAs } from 'file-saver';
import resume from '../../assets/files/resume.pdf';

function AboutModal({ show, toggleModal }) {
    const saveFile = () => {
        saveAs(resume, 'Samantha-Stockall-Resume')
    }
    return ( 
        <section className={show ? 'about display-flex' : 'about display-none'}>
            <div className='about__main'>
                <h2 className='about__header'>My Story</h2>
                <img className='about__close' src={close} alt='close' onClick={toggleModal}/>
                <div className='about__bio'>
                    <h3 className='about__bio-header'>Bio</h3>
                    <div className='about__bio-lower'>
                        <div className='about__bio-pic'>
                            <img className='about__bio-pic--img' src={profile} alt='profile' />
                        </div>
                        <div className='about__bio-content'>
                            <p className='about__bio-text'>
                                A former nurse with a penchant for puzzles, riddles, and logic-based games. I see development as an intersection for my love of problem solving/building things and my desire to help those in need. 
                                I am currently seeking engagements that prioritize sustainability along with innovation. I am eager to work with a team that shares these values, and hope to leave our planet a better place than we found it. 
                            </p>
                            <button onClick={saveFile} className='about__bio-button'>Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default AboutModal;