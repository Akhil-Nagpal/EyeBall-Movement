import { useState, useRef, useEffect } from 'react'
import './App.scss'

function App() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef()
  const eyeRight = useRef()


  function Angle(element) {
    if (!element.current) return;

    let elementX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elementY = element.current.offsetTop + element.current.clientHeight / 2;

    const radians = Math.atan2(mouse.y - elementY, mouse.x - elementX);
    const angle = radians * (180 / Math.PI);

    return angle - 177 ;
  }

  const getMouse = (e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', getMouse);

    return () => {
      document.removeEventListener('mousemove', getMouse);
    }

  }, [mouse])

  return (
    <div className='eyeContainer'>

      <div className="eyeLeft"
        ref={eyeLeft}
        style={{ transform: `rotate(${Angle(eyeLeft)}deg)` }}>
        <div className="lens"></div>
      </div>
      <div className="eyeRight"
        ref={eyeRight}
        style={{ transform: `rotate(${Angle(eyeRight)}deg)` }}>
        <div className="lens"></div>
      </div>
    </div>

  )
}

export default App
