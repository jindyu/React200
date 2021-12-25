import React, {Component} from "react";

class R009_Es6 extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        var jsString1 = '자바스크립트'
        var jsString2 = '입니다\n다음 줄입니다.'
        console.log(jsString1 + '  문자열' + jsString2 + '~')

        var Es6String1 = 'ES6'
        var Es6String2 = '입니다'
        console.log(`${Es6String1} 문자열${Es6String2}!!
            다음줄 입니다`)

        var LongStrig = 'ES6에 추가된 String 함수들입니다.'
        console.log('startsWith : ' + LongStrig.startsWith("ES6에 추가"))
        console.log('endWith: ' + LongStrig.endsWith('함수들입니다.'))
        console.log('includes : ' + LongStrig.includes("추가된 String"))
    }

    render(){
        return (
            <h2>[THIS IS ES6 STRING]</h2>
        )
    }
}

export default R009_Es6