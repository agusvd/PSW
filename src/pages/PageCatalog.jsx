import NavTop from '../components/NavTop'
import Footer from './Footer'
import Catalog from './Catalog'

export default function PageCatalog() {
    return (
        <div className='bg-white flex flex-col gap-8'>
            <NavTop />
            <Catalog />
            <Footer />
        </div>
    )
}