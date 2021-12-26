import React, { Component } from "react";


class R072_onSubmit extends Component {    

    Submit(e){
        var inputVal = document.getElementById('inputId').value
        console.log('inputValue : ' + inputVal)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.Submit}>
                <input type='text' name='inputName' id='inputId' />
                <input type='submit' value='Submit' />
            </form>
            
        )
    }
}

export default R072_onSubmit
