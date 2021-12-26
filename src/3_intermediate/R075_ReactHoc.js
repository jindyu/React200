import React, { Component } from "react";
import withHocCompoent from './R075_withHocComponent'


class R075_ReactHoc extends Component {    

    render() {

        console.log('2. HocComponent render')

        return (
            <>
                <h2>props.name : {this.props.name}</h2>
            </>
            
        )
    }
}

export default withHocCompoent( R075_ReactHoc, 'R075_ReactHoc')
