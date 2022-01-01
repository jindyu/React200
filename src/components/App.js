import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'

import '../css/new.css'
import HeaderAdmin from './Header/HeaderAdmin'
import Footer from './Footer/Footer.js'
import LoginFrom from './LoginForm'
import ReactDebounce from './R094_reactDebounce'
import ReactThrottle from './R095_reactThrottle'
import ReactProxy from './R109_reactProxy'
import ApiGetJson from './R110_ApiGetJson'
import ApiPostJson from './R111_ApiPostJson'
import FloatingPopulationList from './Floating_population/R096_floatingPopulationList'
import SoftwareList from './SoftwareToolsManage/R126_SoftwareList'

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
          <Route exact path='/ReactProxy' element={<ReactProxy />} />
          <Route exact path='/ApiGetJson' element={<ApiGetJson />} />
          <Route exact path='/ApiPostJson' element={<ApiPostJson />} />
          <Route exact path='/SoftwareList' element={<SoftwareList />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
