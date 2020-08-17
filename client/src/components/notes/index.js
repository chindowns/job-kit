//NOTES INDEX.JS
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './notes.css'

export default (props) => {

    let note = props.note;

    console.log(props);

    return (
        <div>
            <Row className="note-head d-flex justify-content-between align-center">
                <Col className="text-left">{note.contact}</Col>
                <Col className="text-right">{note.date}</Col>
            </Row>
            <Row className="note-text">
                {note.note}
            </Row>
        </div>
    )
}
