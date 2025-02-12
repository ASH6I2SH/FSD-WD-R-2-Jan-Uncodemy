import React, { useRef } from 'react'
import Card from './Card'
import Nav from './Nav'

const Foreground = () => {
  const ref= useRef(null);
  return (
    <div ref={ref} className=" fixed z-4 flex foreground w-full h-full  top-0 left-0">
     <Nav/>
     <Card cardForegroundRef={ref}/>
     <Card cardForegroundRef={ref}/>
     <Card cardForegroundRef={ref}/>
    </div>
  )
}

export default Foreground