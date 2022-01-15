import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import cookie from 'react-cookies'

import '../css/new.css'
import HeaderAdmin from './Header/HeaderAdmin'
import Footer from './Footer/Footer.js'
import LoginFrom from './LoginForm'
import SoftwareList from './SoftwareToolsManage/R126_SoftwareList'
import SoftwareView from './SoftwareToolsManage/R130_SoftwareView'
import Register from './Register/R148_Register'
import axios from 'axios'

// function App() {
class App extends Component{

  componentDidMount(){
    axios.post('/api/LoginForm?type=SessionConfirm', {
      token1 : cookie.load('userid'),
      token2 : cookie.load('username')
    })
    .then(response => {
      this.state.userid = response.data.token1
      let password = cookie.load('userpassword')
      if(password != undefined){
        axios.post('/api/LoginForm?type=SessionSignin', {
          is_Email: this.state.userid,
          is_Token : password
        })
        .then(response => {
          if(response.data.json[0].useremail === undefined){
            this.noPermission()
          }
        })
        .catch(error => {
          this.noPermission()
        })
      } else {
        this.noPermission()
      }
    })
    .catch(response => this.noPermission())
  }

  noPermission = (e) => {
    if(window.location.hash != 'nocookie'){
      this.remove_cookie()
      window.location.href = '/login/#nocookie'
    }
  }

  remove_cookie = (e) => {
    cookie.remove('userid', {path: '/'})
    cookie.remove('username', {path: '/'})
    cookie.remove('userpassword', {path: '/'})
  }

  render(){
    return (
      <div className='App'>
        <HeaderAdmin />
          <Route exact path='/' component={LoginFrom} />
          <Route path='/login' component={LoginFrom} />
          <Route exact path='/SoftwareList' component={SoftwareList} />
          <Route path='/SoftwareView/:swtcode' component={SoftwareView} />
          <Route exact path='/register' component={Register} />
        <Footer />
      </div>
    );
  }
}

export default App;
