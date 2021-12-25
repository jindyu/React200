import React, { Component } from "react";


class R065_PromiseCatch extends Component {    

    componentDidMount(){
        new Promise((resolve, reject) => {
            reject(Error('ERROR Info'))
        })
        .then(function(result){
            console.log('then : ' + result)
        })
        .catch(result => {
            console.log('catch : ' + result)
        })
    }

    render() {
        return (
            <>
            <h1>Promise</h1>
            </>
            
        )
    }
}

export default R065_PromiseCatch
