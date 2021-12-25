import axios from "axios";
import React, { Component } from "react";


class R061_AxiosGet extends Component {    

    componentDidMount(){
        axios.get('http://date.jsontest.com/')
            .then(response => alert(response.data.date))
    }

    render() {
        return (
            <>
            <h1>axios get</h1>
            </>
            
        )
    }
}

export default R061_AxiosGet
