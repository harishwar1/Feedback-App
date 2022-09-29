import {FaTimes} from 'react-icons/fa'
function Feedbackitem({item,handleDelete}) {
  
    
  return (
    <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <button onClick={()=> handleDelete(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default Feedbackitem