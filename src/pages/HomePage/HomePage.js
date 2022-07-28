import SideBar from '../../components/SideBar/SideBar';
import './HomePage.scss'

function HomePage() {
    return ( 
        <main className='main'>
            <SideBar className='main__sidebar'/>
            <section className='main__content'>
                <h1 className='main__header'>hi! I'm Samantha</h1>
                <p className='main__text'>A full stack developer with a passion for sustainability and climate positive action</p>
                <button className='main__learn-more'>Learn More</button>
            </section>
        </main>
    );
}

export default HomePage;