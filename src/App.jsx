import { useState } from 'react'

import Eyes from './Eyes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Eyes />
    </>
  )
}

export default App
