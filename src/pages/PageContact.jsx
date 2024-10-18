import React from 'react'
import NavTop from '../components/NavTop'
import NavDock from '../components/NavDock'
import Footer from './Footer'
import Contact from './Contact'

export default function PageContact() {
    return (
        <div className='bg-[#eeeeee]'>
            <NavTop/>
            <NavDock/>
            <Contact/>
            <Footer/>
        </div>
    )
}


