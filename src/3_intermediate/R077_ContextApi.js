import React, { Component } from "react";
import Children from './R077_contextChildren.js'

const {Provider, Consumer} = React.createContext()
export { Consumer }


class R077_ContextApi extends Component {

    constructor(props){
        super(props)
        this.setStateFunc = this.setStateFunc.bind(this)
    }

    setStateFunc(value){
        this.setState({name: value})
    }

    render() {

        const content = {
            ...this.state,
            setStateFunc: this.setStateFunc
        }

        return (
            <Provider value={content}>
                <Children />
            </Provider>
            
        )
    }
}

export default R077_ContextApi
