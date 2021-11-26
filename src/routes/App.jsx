import React from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import '../styles/global.scss';
import {Layout} from '../containers/Layout';
import {SignIn} from '../containers/SignIn';
import { SignUp } from '../containers/SignUp';
import {NotFound} from '../pages/404';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>

              <Route exact path='/' element={<SignIn/>} />
              <Route exact path='/signin' element={<SignIn/>} />
              <Route exact path='/signup' element={<SignUp/>}/>
              <Route path='/404' element={<NotFound/>} />
              <Route path='*' element={<NotFound/>} />

      
          </Routes>
        </Layout>
    </BrowserRouter>
    
  );
}

export default App;
