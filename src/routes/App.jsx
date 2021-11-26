import React from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import '../styles/global.scss';
import {Layout} from '../containers/Layout';
import {Login} from '../containers/Login';
import { RecoveryPassword } from '../containers/RecoveryPassword';
import {NotFound} from '../pages/404';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>

              <Route exact path='/' element={<Login/>} />
              <Route exact path='/login' element={<Login/>} />
              <Route exact path='/recovery_password' element={<RecoveryPassword/>}/>
              <Route path='/404' element={<NotFound/>} />
              <Route path='*' element={<NotFound/>} />

      
          </Routes>
        </Layout>
    </BrowserRouter>
    
  );
}

export default App;
