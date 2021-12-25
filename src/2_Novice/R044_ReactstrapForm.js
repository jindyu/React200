import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

class R044_ReactstrapForm extends Component {    

    render() {
        return (
            <Form>
                <Label for='gender'>gender</Label>
                <Input type='select' bsSize='lg'>
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for='address'>address</Label>
                            <Input type='text' name='address' id='address' />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='mobile'>mobile</Label>
                            <Input type='text' name='mobile' id='mobile' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for='age'>age</Label>
                            <Input type='text' name='age' id='age' />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default R044_ReactstrapForm
