import NavTop from '../components/NavTop'
import HeroStart from '../components/HeroStart'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import NavDock from '../components/NavDock'

const Home = () => {
    return (
        <div className='bg-[#eeeeee] flex flex-col gap-8'>
            <NavTop />
            <HeroStart />
            <About />
            <Footer />
            <NavDock />
        </div>
    )
}

export default Home