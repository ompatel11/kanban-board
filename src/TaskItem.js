import React from 'react'
import './TaskItem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPencilSquare, BsPinAngle, BsPlusSquare } from "react-icons/bs";
import Avatar from 'react-avatar';

export default function TaskItem({ heading, description, priority,id }) {
    function handleDragStart(e) {
        console.log(e.target.id)
        e.dataTransfer.setData("text/plain", e.target.id);
    }
    
    const priority_element = {
        'low': <p className='low-priority'> Low Priority </p>,
        'medium': <p className='medium-priority'> Medium Priority </p>,
        'high': <p className='high-priority'> High Priority </p>
    }
    return (
        <Container
            className="draggable-task-items"
            id={id}
            draggable={true}
            onDragStart={handleDragStart}
        >
            <Row>
                <Col md='12'>
                    <h5> {heading}</h5>
                    <Row>
                        {priority_element[priority]}
                    </Row>
                </Col>


            </Row>
            <Row>
                <Col>
                    <p> {description}</p>
                </Col>
            </Row>
            <Row style={{ justifyContent: 'right', justifyItems: 'right' }}>
                <Col md='2'>
                    <BsPencilSquare> </BsPencilSquare>

                </Col>
                <Col md='2'>
                    <BsPinAngle></BsPinAngle>
                </Col>
                <Col>
                    <BsPlusSquare></BsPlusSquare>
                </Col>
                <Col aria-colspan={'6'} >

                    <Avatar name='Foo Bar' size="35" round='20px'></Avatar>
                </Col>
            </Row>
        </Container>
    )
}
