import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


class R049_ReactstrapNavbar extends Component {    

    constructor(props){
        super(props)
        this.state = { modal: false }
    }

    toggle = () => {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <>
            <Button color='warning' onClick={this.toggle}>Modal버튼</Button>
            <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
                <ModalBody>
                    The generated Lorem Ipsum is therefore always free from repetiton.
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={this.toggle}>확인</Button>
                    <Button color='secondary' onClick={this.toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}

export default R049_ReactstrapNavbar
