import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactRouter from './R089_reactRouter'
import ReactRouter2 from './R089_reactRouter2'

import '../css/new.css'
import HeaderAdmin from './Header/HeaderAdmin'
import Footer from './Footer/Footer.js'

// function App() {
class App extends Component{
  render(){
    return (
      <div className='App'>
        <HeaderAdmin />
        <Routes>
          <Route exact path='/' element={<ReactRouter />} />
          <Route exact path='/reactRouter2' element={<ReactRouter2/>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
