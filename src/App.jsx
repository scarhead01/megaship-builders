import React from 'react'
import styled from 'styled-components'
import MainContainer from './components/MainContainer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Clients from './components/Clients';

const App = () => {
  return (
    <Con>
    <Router>
   <Routes>
      <Route path="/" element={<MainContainer/>}/>
      <Route path="/clients" element={<Clients/>}/>
   </Routes>
   </Router>
    </Con>
  )
}
const Con =styled.div`
  
`
export default App