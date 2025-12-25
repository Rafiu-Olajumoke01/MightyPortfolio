import React, { useState } from 'react';
import './styles.css';
import Top from '../../components/Topbar/Top';
import Sidebar from '../../components/sidebar/Sidebar';
import Board from '../Board/board';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='main'>
      <Top 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      />
      
      <div className="otherContent">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <div className="boardContent">
          <Board />
        </div>
      </div>
    </div>
  );
}

export default Home;