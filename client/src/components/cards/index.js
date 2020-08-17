//CARD INDEX.JS

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap';

export default (props) => {

    let application = props.application;

    return (
        <Card bg='dark'
            key={props.idx}
            text='white'
            style={{ width:'300px', margin:' 15px 0px 0px 15px' }}
            className=""
        >
            <Card.Header className="d-flex justify-content-between align-center">
                {application.companyName}
                <Link to={{pathname: '/edit', data:{application}}}>
                    <Button variant="outline-secondary" className="fa fa-pencil-square-o" style={{ padding: "1px 3px 1px 7px" }} >
                    </Button>
                </Link>

            </Card.Header>
            <Card.Body>
                <Card.Title>{application.jobTitle}</Card.Title>
                <Card.Text style={{fontWeight: '300'}}>
                    {application.jobDescription.split(' ').slice(0,25).join(' ')}
                </Card.Text>
                <Row md={{ span: 4, offset: 4 }}>
                    <Col><a href={application.source} target="_blank" rel="noopener noreferrer" className="underline slate-blue" >Job Posting</a></Col>
                    <Col><a href={application.resume} target="_blank" rel="noopener noreferrer" className="underline slate-blue" >Resume Link</a></Col>
                </Row>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <div>{application.dateApplied}</div>
                <div>{application.stage}</div>
            </Card.Footer>
        </Card>
    )
}