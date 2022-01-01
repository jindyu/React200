import React, { Component } from "react";
import { debounce } from 'lodash'

class R095_reactThrottle extends Component {    

    throttleFunc = debounce(() => {
        console.log('Throttle API Call')
    }, 1000)

    render() {

        return (
            <>
                <h2>검색어 입력</h2>
                <input type="text" name="" id="" onChange={this.throttleFunc} />
            </>
            
        )
    }
}

export default R095_reactThrottle
