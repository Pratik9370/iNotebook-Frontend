import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a=useContext(noteContext)
  return (
    <div>
      Hi {a.name} This is about page
    </div>
  )
}

export default About
