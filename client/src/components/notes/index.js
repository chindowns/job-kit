//NOTES INDEX.JS
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import './notes.css';

export default (props) => {

    let note = props.note;

    console.log(props);

    function deleteNote() {
        console.log(`Delete ${note.id}`)

        axios.delete(`/api/notes/${note.id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Row className="note-head">
                <Col className="text-left">{note.contact}</Col>
                <Col 
                    id="trashicon" 
                    className="fa fa-trash"
                    // className="fa fa-pencil-square-o"
                    onClick={e => deleteNote(note)}>
                </Col>
            </Row>
            <Row className="note-text">
                {note.note}
            </Row>
        </div>
    )
}
