import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import CardDetail from './Components/CardDetail/CardDetail';
import About from './Pages/About/About';
import Collection from './Pages/Collection/Collection';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Qish from './Components/Service/Qish';
import Yoz from './Components/Service/Yoz';
import Kuz from './Components/Service/Kuz';
import Bahor from './Components/Service/Bahor';

function App() {
    return (
     
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/collection" element={<Collection/>} >
                <Route path='qishki' element={<Qish/>}/>
                <Route path='yozgi' element={<Yoz/>}/>
                <Route path='kuzgi' element={<Kuz/>}/>
                <Route path='bahorgi' element={<Bahor/>}/>
                </Route>
              
                <Route path="/contact" element={<Contact/>} />
                <Route path="/card/:id" element={<CardDetail />} />
            </Routes>
      
    );
}

export default App;
