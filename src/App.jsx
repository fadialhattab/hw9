import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { useState } from 'react'

function App() {
const [show,setShow]=useState(true)

const toggle=()=>{
 show?setShow(false):setShow(true)
}
  return (
    <>
    <button onClick={toggle}>click me</button>
    {show && <p>hello there</p>}
    </>
  )
}

export default App
