import React, { Component } from "react";
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap'

// remove InputGroupAddon reactstrap v9.0.0

class R045_ReactstrapInputGroup extends Component {    

    render() {
        return (
            <>
                <InputGroup>
                    <Input placeholder='userId' /><InputGroupText>@reactmail.com</InputGroupText>
                </InputGroup>
                <InputGroup>
                    <Button>버튼</Button><Input />
                </InputGroup>
            </>
        )
    }
}

export default R045_ReactstrapInputGroup
