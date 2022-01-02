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
import SoftwareView from './SoftwareToolsManage/R130_SoftwareView'

// function App() {
class App extends Component{
  render(){
    return (
      <div className='App'>
        <HeaderAdmin />
          <Route exact path='/' component={LoginFrom} />
          <Route exact path='/SoftwareList' component={SoftwareList} />
          <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
        <Footer />
      </div>
    );
  }
}

export default App;
