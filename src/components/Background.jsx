import React from 'react';
import Box from './Box';

const Background = () => {
    return (
        <div className='m-0 p-0 w-screen h-screen bg-gradient-to-t from-slate-400 to-slate-700 flex justify-center items-center flex-col gap-16'>
            <h2 className='font-google1 text-4xl text-zinc-800 hover:animate-bounce transition-all duration:700 ease-in-out'>  Typing Text For 1 Minute </h2>
            <Box />
        </div>
    );
}

export default Background;
