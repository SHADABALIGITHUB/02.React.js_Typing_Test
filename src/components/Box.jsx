import React from 'react';
import ColorfulText from './ColorfulText';


const text = "i am"

const Box = () => {
    return (
        <div className='w-1/2 h-1/2 p-2 mx-auto flex justify-center items-center'>
            <img className='rounded-md hover:scale-125 transition-all duration-700 ease-in-out cursor-pointer hover:shadow-2xl hover:shadow-amber-600 grayscale hover:grayscale-0'
                src="notes.png"
                alt="Okey wotking" />

            <div className='w-1/2 h-1/2 absolute text-4xl p-4 leading-loose'>

                <ColorfulText letters={text.split("")} />
            </div>



        </div>
    );
}

export default Box;
