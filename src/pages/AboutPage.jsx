import React from 'react'
import Card from '../components/shared/card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1><b>ABOUT</b></h1>
            <p>Developed by <b>Kallu Harishwar Reddy</b></p>
            <version><p>Version: <b>1.0.0</b></p></version>

            <Link to='/'>Back</Link>
        </div>
    </Card>
  )
}

export default AboutPage