import React, { useState } from 'react';
import Top from './../Topbar/Top';
import Sidebar from './../Layouts/Layouts';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Top 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      />
      
      <div className="layout-container">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        
        <div className="main-content">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;