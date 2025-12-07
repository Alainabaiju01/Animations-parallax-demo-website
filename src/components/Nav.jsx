import React from 'react'
import { motion } from "motion/react";
import Enq from './Enq';

function Nav() {
  return (
    <div>
        <nav className="flex items-center justify-between p-4 m-3 ">
          <div className='flex'>
            <motion.img 
        src="./logo.png"
        className="w-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
            <h1 className='p-4 font-bold text-2xl text-white'>Travelog</h1>
          </div>
            <div className="">
               <Enq/>
                
               
            </div>
            </nav>
         
     </div>
  )
}

export default Nav
