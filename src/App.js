
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Line from './charts/Line';
import Bar from   './charts/Bar';
import Surface from './charts/Surface';
import Box from  './charts/Box';
import Scatterplot from './charts/Scatterplot';
import Buble from './charts/Buble';
import Graphs from './Graphs ';
import Register from './Register';
import Har from './Har';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element ={<Register/>} />
      <Route path='/Login' element= { <Login/>}/>
      <Route path='/home' element= { <Home/>}/>
      <Route path='/home' element= { <Home/>}/>
      <Route path='/register' element= { <Register/>}/>
      
      
      <Route path='/line' element= { <Line/>}/>
      <Route path='/bar' element= { <Bar/>}/>
      <Route path='/boc' element= { <Box/>}/>
      <Route path='/Buble' element= { <Buble/>}/>
      <Route path='/surface' element= { <Surface/>}/>
      <Route path='/scatter' element= { <Scatterplot/>}/>
      <Route path='/graph' element= { <Graphs/>}/>
      

      </Routes>
    </div>
  );
};

export default App;