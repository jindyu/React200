import React, { Component } from "react";
const axios = require('axios')

class R111_ApiPostJson extends Component {    

    componentDidMount = async () => {
        axios.post('/users', {

        })
        .then(response => {
            console.log('response.data.message : ' + response.data.message)
        })
        
    }

    render() {

        return (
            <>
                <h1>Call Node Api Post</h1>
            </>
            
        )
    }
}

export default R111_ApiPostJson
