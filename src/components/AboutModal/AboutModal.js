import './AboutModal.scss'
import close from '../../assets/icons/white-x.png';
import profile from '../../assets/images/profile.jpeg'

function AboutModal({ show, toggleModal }) {
    return ( 
        <section className={show ? 'about display-flex' : 'about display-none'}>
            <div className='about__main'>
                <div className='about__overlay'></div>
                <div className='about__upper'>
                    <img className='about__close' src={close} alt='close' onClick={toggleModal}/>
                    <div className='about__profile'>
                        <img className='about__profile--pic' src={profile} alt='profile' />
                        <div className='about__profile--overlay'></div>
                    </div>
                    <div className='about__bio'>
                        <h3 className='about__bio-header'>Bio</h3>
                        <p className='about__bio-text'>I see development as an intersection for my love for problem solving/building things and my desire to help those in need. I plan to do this by seeking engagements that prioritize sustainability along with innovation. I am eager to work with a team that shares these values, and hope to leave our planet a better place than we found it. </p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default AboutModal;