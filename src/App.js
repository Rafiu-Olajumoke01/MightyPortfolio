import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Topbar/Top";

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Home = lazy(() => import('./pages/Home/home'));
const Board = lazy(() => import('./pages/Board/board'));
const Mindset = lazy(() => import('./pages/Mindset/Mindset'));
const Kanban = lazy(() => import('./pages/Kanban/Kanban'));
const Journey = lazy(() => import('./pages/Journey/Journey'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
        {/* <Top/> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Board" element={<Board />} />
            <Route path="/Mindset" element={<Mindset />} />
            <Route path="/Kanban" element={<Kanban />} />
            <Route path="/Journey" element={<Journey />} />
            
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;