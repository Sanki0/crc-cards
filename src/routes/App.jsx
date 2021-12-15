import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import '../styles/global.scss';
import { Layout } from '../containers/Layout';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/404';
import { Home } from '../pages/Home';
import { Feedback } from '../pages/Feedback';
import { User } from '../pages/User';
import { CRC } from '../scripts/CRC'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/feedback' element={<Feedback />} />
          <Route exact path='/user' element={<User />} />
          <Route exact path='/crc' element={<CRC />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />



        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
