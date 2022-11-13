import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  // const {myName}=useProductContext();
  const data={
    name:'All Things in One Store'
  }
  return (
    <>
    {/* {myName} */}
     <HeroSection myData={data}/>
     </>
  )
  
}

export default About