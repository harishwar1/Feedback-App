import Header from "./components/Header";
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fa } from "react-icons/fa";
function App() {
  
  const [feedback, setfeedback] =useState(FeedbackData)
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    
    setfeedback([newFeedback, ...feedback])

  }
  const deleteFeedback=(id)=>{
    if(window.confirm('are you sure you want to delete?')){
      setfeedback(feedback.filter((item)=>item.id!==id))
    }
  }
  return (
    <>
    <Router>
     <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>

        <FeedbackForm  handleAdd ={addFeedback}/>
       
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback} />
        </>
          }
          ></Route>
           
        <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
      </Router>
    </>
  );
}

export default App;
