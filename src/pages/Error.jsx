import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="grid h-screen place-content-center bg-white px-4 gap-5">
            <h1 className="uppercase tracking-widest text-gray-500 font-primary">404 | Not Found</h1>

            <Link to='/' className='font-primary flex justify-center items-center'>
                <Button className='w-full'>Home</Button>
            </Link>

        </div>
    )
}

export default Error