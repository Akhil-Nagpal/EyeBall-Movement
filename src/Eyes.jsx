import React, { useEffect, useState } from 'react'
import BackgroundImage from "./assets/bg.png"

function Eyes() {

  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className='eyes w-full h-screen overflow-hidden'>

      <img src={BackgroundImage} className='relative w-full h-screen bg-cover bg-center' />

      <div className='absolute flex gap-10 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>

        <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>

          <div className=' w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>

            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6'>

              <div className='bg-zinc-100 w-6 h-6 rounded-full '></div>

            </div>
          </div>

        </div>

        <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>

          <div className='  relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>

            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6'>

              <div className='bg-zinc-100 w-6 h-6 rounded-full '></div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes