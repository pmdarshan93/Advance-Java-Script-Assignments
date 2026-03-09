import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './components/Welcome'
import Count from './components/count'
import Color from './components/color'
import ColorDiv from './components/ColorDiv'
import './App.css'


function App() {
  const [color, setColor] = useState('#f11500')

  return (
    <>
      {/* <Welcome></Welcome>
      <Count></Count> */}
      <Color color={color} setColor={setColor} ></Color>
      <ColorDiv color={color}></ColorDiv>
   </>
  )
}

export default App
