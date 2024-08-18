import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Home sahifasiga yo'naltirish
import CardDetail from './Components/CardDetail/CardDetail';

function App() {
    return (
     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card/:id" element={<CardDetail />} />
            </Routes>
      
    );
}

export default App;
