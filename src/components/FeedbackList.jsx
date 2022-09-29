import React from 'react'
import {motion , AnimatePresence} from 'framer-motion'
import FeedbackData from '../data/FeedbackData'
import Feedbackitem from './Feedbackitem'

function FeedbackList({feedback,handleDelete}) {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) =>(
        <motion.div
        key={item.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
        <Feedbackitem key={item.id} item={item}
        handleDelete={handleDelete} />
        </motion.div>

      )) }
      </AnimatePresence>

      
    </div>
  )
}

export default FeedbackList