import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App/App';
import Presentation from './Presentation/Presentation';

const Main = () => {
    /*
    <Route path='/player/*' element={< Player />} />
    */
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< App />} />
                <Route path='/presentation/*' element={< Presentation />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;