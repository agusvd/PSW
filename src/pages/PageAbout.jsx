import React from 'react'
import NavTop from '../components/NavTop'
import NavDock from '../components/NavDock'
import Footer from './Footer'
import About from './About'

export default function PageAbout() {

    return (
        <div className='bg-white'>
            <NavTop/>
            <NavDock/>
            <About/>
            <Footer/>
        </div>
    )
}
