import React, {Component} from "react";

class R0010_Variable extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        var varName = 'react'
        console.log('varName1 : ' + varName)
        var varName = '200'
        console.log('varName2 : ' + varName)

        let letName = 'react'
        console.log('letName1 : ' + letName)
        // let letName = '200'
        letName = 'react200'
        console.log('letName2 : ' + letName)

        const constname = 'react'
        // const constName = '200'
        // Parsing error : already been declared
        // constname = 'react200
        // Uncaught TypeError: Assignment to constant variable
        console.log('constName : ' + constname)
    }

    render(){
        return (
            <h2>[THIS IS Variable]</h2>
        )
    }
}

export default R0010_Variable