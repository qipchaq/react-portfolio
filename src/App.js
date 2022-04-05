import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout'
import Home from './components/Home'
// import Sidebar from './components/Sidebar'


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
