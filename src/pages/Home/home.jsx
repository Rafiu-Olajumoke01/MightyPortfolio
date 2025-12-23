import React from 'react'
import './styles.css'
import Top from '../../components/Topbar/Top'
import Sidebar from '../../components/sidebar/Sidebar'
import Board from '../Board/board'

function home() {
  return (
    <div className='main'>
      <Top/>
      <div className="otherContent">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="boardContent">
          <Board />
        </div>
      </div>
    </div>
  )
}

export default home