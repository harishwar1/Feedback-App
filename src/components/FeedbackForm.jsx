import React from 'react'
import { useState } from 'react'
import Card from './shared/card'
import Button from './shared/Button'
import RatingSelecet from './RatingSelect'

function FeedbackForm({handleAdd}) {
    const [text, setText]=useState('')
    const [btnDisabled, setBtnDisabled]=useState(true)
    const [rating,setRating]=useState(10)
    const [message, setMessage]=useState('')
    const handleTextChange=(e)=>{
        if(text===''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !=='' && text.trim().length<=10){
            setMessage('Review must be atleast 10 characters')
            setBtnDisabled(true)
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)

    }
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback={
                text,
                rating,
            }
            handleAdd(newFeedback)
            setText('')
        }
    }

    
   

  return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelecet select={(rating)=>setRating(rating)}/>
        <div className='input-group'>
            <input onChange={handleTextChange} type="text" placeholder='Write a review' 
            value={text}/>
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
           

        </div>
        {message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm