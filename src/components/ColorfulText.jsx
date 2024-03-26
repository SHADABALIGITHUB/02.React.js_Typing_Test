import React, { useEffect, useRef, useState } from 'react';

const ColorfulText = ({ letters }) => {
  const audioRef = useRef(null);
  const [cursorPos, setCursorPos] = useState(0);
  const [color, setColor] = useState(letters.map(_ => 'black'));

  useEffect(() => {
    setColor(prev => {
      const newColor = [...prev];
      newColor[cursorPos] = '#000000';
      return newColor;
    });
  }, [cursorPos]);



  const detect = (e) => {
    if(cursorPos===letters.length){
      alert("array over here ");
  
      

      return;
    }
    if (e.key === "Backspace" || e.key === "Delete") {
      setCursorPos(prev => {
        return prev > 0 ? prev - 1 : 0;
      })
      
    }
   else {

      setColor(prev => {
        const newColor = [...prev];
        if (letters[cursorPos] === e.key) {
          newColor[cursorPos] = '#00FF00';
        } else {
          newColor[cursorPos] = '#FF0000';
        }
        return newColor;
      });
      setCursorPos(prev => prev + 1);
     
      
    
    }

    console.log(cursorPos);
    


    if (e.ctrlKey || e.altKey) {
    }
    else {
      audioRef.current.play();
    }
  }

  return (

    <>
  
<button onKeyDown={detect} type="button" className="fixed bottom-10 right-1/2 text-gray-900 bg-gradient-to-r
 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br
 focus:ring-4 focus:outline-none focus:ring-lime-300
  dark:focus:ring-lime-800 font-medium rounded-lg 
  text-sm px-5 py-2.5 text-center me-2 mb-2"> Start </button>
    <div tabIndex="0">
 
      <audio ref={audioRef} controls={true} className='hidden'>
        <source src="/Audio1.mp3" type="audio/mpeg" />

      </audio>

      {letters.map((letter, index) => (
        <span key={index} style={{ color: color[index] }} >
          {letter}
        </span>
      ))}
    </div>
  </>
  );
}

export default ColorfulText;
