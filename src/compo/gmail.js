import React from 'react'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Mail from './Mail.js'
import "./gmail.css"
//import Widget from './Widget.js'


function Gmail() {
  return (
    <div className='gmail'>
        <Header/>
        <div className='gmailbody'>
          <Sidebar/>
          <Mail/>
        </div>
        </div>
  )
}

export default Gmail