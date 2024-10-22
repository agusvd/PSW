import NavTop from '../components/NavTop'
import Footer from './Footer'
import Catalog from './Catalog'

export default function PageCatalog() {
    return (
        <div className='bg-white'>
            <NavTop/>
            <Catalog/>
            <Footer/>
        </div>
    )
}