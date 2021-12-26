import React from "react";

export default function withHocCompoent(InComponent, inComponentName){
    return class OutComponent extends React.Component {
        componentDidMount(){
            console.log(`3. InComponentName : ${inComponentName}`)           
        }

        render(){
            console.log('1. InComponent render')
            return (<InComponent { ...this.props } />)
        }
    }
}