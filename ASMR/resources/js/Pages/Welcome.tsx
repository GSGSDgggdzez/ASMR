import React from 'react'
import Navbar from '@/Components/Navbar'
import HeroMain from '@/Components/HeroMain'
export default function Welcome() {
    return (
        <div>
            {/* these is the navbar */}
            <div>
                <Navbar />
            </div>
            {/* these Is the hero section  */}
            <div className=''>
                <HeroMain />
            </div>
            <div>
                hello
            </div>
        </div>

    )
}
