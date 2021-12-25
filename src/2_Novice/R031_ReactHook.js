import React, { useState, useEffect } from "react";

// 함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state 와 같은 기능을 사용하기 위해
// hook을 이용함

function R031_ReactHook(props) {
    const [contents, setContents] = useState('[THIS IS REACT')

    useEffect(() => {
        console.log('useEffect')
    })

    return (
        <div style={{padding:'0px'}}>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    )
}

export default R031_ReactHook