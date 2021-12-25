import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class R040_ReactstrapCard extends Component {

    render() {
        return (
            <div style={{padding:'0px'}}>
                <Card>
                    <CardImg top height='200px' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fhousecontents.co.kr%2Fentry%2F%25EC%2598%2588%25EC%2581%259C%25EC%25A0%2584%25EC%259B%2590%25EC%25A3%25BC%25ED%2583%259D-%25EA%25B5%25AC%25EA%25B2%25BD%25ED%2595%25B4%25EB%25B3%25B4%25EC%259E%2590-%25EC%25A0%2584%25EC%259B%2590%25EC%25A3%25BC%25ED%2583%259D%25EC%2582%25AC%25EC%25A7%2584%25EB%25AA%25A8%25EC%259D%258C&psig=AOvVaw2628pYp3ZEhpXWf_vb_YJ7&ust=1640505159722000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDDw4-8_vQCFQAAAAAdAAAAABAD' alt='Card Image' />
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard
