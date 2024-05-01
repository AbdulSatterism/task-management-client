import React from 'react';
import banner from '../../../assests/banner/banner.jpg'

const Banner = () => {
    return (
        <div className="h-[200px]   w-full bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className='hero-overlay bg-opacity-50 relative'>
                <div className="text-gray-900 absolute bottom-0 p-4  text-start">
                    <p className='font-thin'>share your problem and bug</p>
                    <h1 className='text-2xl font-bold'>project & task</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;