import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App/App';
import Presentation from './Presentation/Presentation';
import Player from "./Player/Player";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< App />} />
                <Route path='/presentation/*' element={< Presentation />} />
                <Route path='/player/*' element={< Player />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;