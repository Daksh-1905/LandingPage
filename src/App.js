import React,{useState} from 'react'
import Navbar from "./components/navbar/Navbar"
import Homepage from './components/home/Homepage'
import Features from './components/features/Features'
import Advantages from './components/advantages/Advantages'
import Testimonial from './components/testimonial/Testimonial'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
const App = () => {
  const [mode,setMode]=useState("white");
  const toggleMode=()=>{
    if(mode==="white")
    {
      setMode("black")  
      document.body.style.backgroundColor="black"
      
    }
    else
    {
      setMode("white")
      document.body.style.backgroundColor="white"
      
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Homepage mode={mode}/>
      <Features mode={mode}/>
      <Advantages mode={mode}/>
      <Testimonial mode={mode}/>
      <Faq mode={mode}/>
      <Banner mode={mode}/>
      <Footer mode={mode}/>
    </>
  )
}

export default App
