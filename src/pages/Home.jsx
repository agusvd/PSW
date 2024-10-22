import NavTop from '../components/NavTop'
import HeroStart from '../components/HeroStart'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='bg-white flex flex-col gap-8'>
            <NavTop />
            <HeroStart />
            <Footer />
        </div>
    )
}

export default Home