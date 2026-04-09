import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
// default문으로 지정한 이름 / 파일 위치
import Goal from './components/Goal'

function App() {

  


  return (
    
    <>
      <Profile/>
      <Goal
      goal = "이번년도 목표"/>
    

    

    </>

  )
}

export default App
