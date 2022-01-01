import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'

import '../css/new.css'
import HeaderAdmin from './Header/HeaderAdmin'
import Footer from './Footer/Footer.js'
import LoginFrom from './LoginForm'
import ReactDebounce from './R094_reactDebounce'
import ReactThrottle from './R095_reactThrottle'
import FloatingPopulationList from './Floating_population/R096_floatingPopulationList'

// function App() {
class App extends Component{
  render(){
    return (
      <div className='App'>
        <HeaderAdmin />
        <Routes>
          <Route exact path='/' element={<LoginFrom />} />
          <Route exact path='/Debounce' element={<ReactDebounce />} />
          <Route exact path='/Throttle' element={<ReactThrottle />} />
          <Route exact path='/floatingPopulationList' element={<FloatingPopulationList />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
