import React from 'react';
import SignUp from './Components/SignUp';
import { Route , Routes , Navigate } from 'react-router-dom';
import Login from './Components/Login';

const App = () => {
    return (
        <div>
        <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Navigate to='/signup' />} />
        </Routes>
            
        </div>
    );
};

export default App;