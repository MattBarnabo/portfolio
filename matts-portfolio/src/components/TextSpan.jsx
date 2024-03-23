import React from 'react'
import {motion, useAnimationControls} from 'framer-motion'
import { useState } from 'react'


const TextSpan = ({children}) => {
const controls = useAnimationControls();
const [isPlaying, setIsPlaying] = useState(false)
const [color, setColor] = useState()

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition:{
          times:[0, .6, .7, .8, .9, 1]
        },
        
    })
    setIsPlaying(true)
    setColor("#0000ff")
    }
  

  return (
    <motion.span className='inline-flex'
    animate={controls}
    onMouseOver={() => {
      if(!isPlaying)
        rubberBand()
        
    }}
    onAnimationComplete={() => setIsPlaying(false) && setColor()}
    >
      {children}
    </motion.span>
  )
}

export default TextSpan
