import NavTop from '../components/NavTop'
import HeroStart from '../components/HeroStart'
import Footer from './Footer'
import WhyChooseUs from '../components/WhyChooseUs';
import Certifications from '../components/Certifications';
import ContactBanner from '../components/ContactBanner';

const Home = () => {
    return (
        <div className='bg-white flex flex-col gap-8 font-primary'>
            <NavTop/>
            <HeroStart/>
            <WhyChooseUs/>
            <Certifications/>
            <ContactBanner/>
            <Footer/>
        </div>
    )
}

export default Home