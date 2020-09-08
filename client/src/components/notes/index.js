//NOTES INDEX.JS
import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import './notes.css';

export default (props) => {
    let note = props.note;

    const [hide, setHide] = useState(false)

    console.log(props);

    function deleteNote() {
        // console.log(`Delete ${note.id}`)

        axios.delete(`/api/notes/${note.id}`)
        .then(res => {
            // console.log(res.status);
            setHide(true);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            {hide ? 
                <div className="hide"> </div> 
            :
            <>
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
            </>
            }
        </div>
    )
}
