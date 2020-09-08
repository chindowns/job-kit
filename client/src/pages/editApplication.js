import React, { useState, useEffect } from "react";
// import { Store, del, set } from 'idb-keyval';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Note from '../components/notes'

export default (props) => {

    const [application, setApplication] = useState({});
    // const [description, setdescription] = useState({});
    const [contactNote, setContactNote] = useState({});
    const [editdescription, setEditdescription] = useState(false)
    // const [notes, setNotes] = useState([]);

    const today = new Date().toISOString().slice(0, 10);

    // const applicationStore = new Store('job-manager', 'applications')
    const history = useHistory();
    let tempApp = {};
    let tempNotes = [];

    // Setting State for application, description & 
    props.location.data.application ? tempApp = props.location.data.application : tempApp = {};
    console.log(props.location.data);
    // props.location.data.application.description ? tempdescription = props.location.data.application.description : tempdescription = {};

    // Setting tempNotes to props so contactNote can be added with push.
    props.location.data.application.Notes ? tempNotes = props.location.data.application.Notes : tempNotes = [];

    useEffect(() => {
        setApplication(tempApp);
    }, [tempApp])

    const handleSubmit = (e) => {
        e.preventDefault()

        // don't push an empty note
        if (contactNote.hasOwnProperty('note')) {
            axios.post('/api/notes', contactNote)
            .then(res => console.log(res))
            tempNotes.push(contactNote)
        };

        const updateApplication = {
            "id": application.id,
            "company": application.company,
            "title": application.title,
            "description": application.description,
            "source": application.source,
            "resume": application.resume,
            "dateApplied": application.dateApplied,
            "stage": application.stage,
            "Notes": tempNotes
        }

        // console.log(updateApplication)

        axios.put(`/api/application/${application.userId}-${application.id}`, updateApplication)
        .then(res => {
            // console.log(res.status);
            history.replace('/view')
        })
        .catch((err) => console.log('Failed to update', err));
    }

    return (
        <div className='form'>
            <form className="form-group" onSubmit={handleSubmit}>

                <label className="form-label">Company Name<br />
                    <input id="editCompany"
                        readOnly="readOnly"
                        type="text"
                        name="company"
                        value={tempApp.company} />
                </label>
                <label className="form-label">Job Title<br />
                    <input id="edittitle"
                        type="text"
                        name="title"
                        defaultValue={tempApp.title}
                        onChange={e => setApplication({ ...application, 'title': e.target.value ? e.target.value : tempApp.title })} />
                </label>
                <br />
                <label className="form-label">Link to Job Posting<br />
                    <input id="edittSource"
                        type="url"
                        name="source"
                        defaultValue={tempApp.source}
                        onChange={e => setApplication({ ...application, 'source': e.target.value ? e.target.value : tempApp.source })} />
                </label>
                <label className="form-label">Link to Resume Used<br />
                    <input id="editResume"
                        type="url"
                        name="resume"
                        defaultValue={tempApp.resume}
                        onChange={e => setApplication({ ...application, 'resume': e.target.value ? e.target.value : tempApp.resume })} />
                </label>
                <br />
                <label className="form-label">Stage<br />
                    <input id="editStage"
                        type="select"
                        name="stage"
                        list="stages"
                        placeholder={tempApp.stage}
                        onChange={e => setApplication({ ...application, 'stage': e.target.value ? e.target.value : tempApp.stage })} />
                    <datalist id="stages">
                        <option value="0 - Declined" />
                        <option value="1 - Applied" />
                        <option value="2 - Recruiter" />
                        <option value="3 - Interview" />
                        <option value="4 - Hired" />
                    </datalist>
                </label>
                <br />

                {editdescription ?
                    (<><label className="form-label">Job Description<br />
                        <textarea id="editdescription"
                            type="textarea"
                            name="description"
                            wrap="soft"
                            defaultValue={tempApp.description}
                            onChange={e => setApplication({ ...application, 'description': e.target.value ? e.target.value : tempApp.description })} />
                       </label>
                    </>)
                    :
                    <label className="form-label">Job Description<br />
                        <div className="radius text-left">
                            <div className="fa fa-pencil-square-o" style={{ position: "relative", float: "right", padding: "1px 3px 1px 7px" }} onClick={e => setEditdescription(true)}>
                            </div>
                            {tempApp.description}
                            <br />
                        </div>
                    
                    </label>
                }

                <br />
                {tempNotes ?
                    <label className="form-label">Notes
                        <div className="radius">
                            {tempNotes.map((note, idx) => (<Note note={note} key={idx} />))}
                        </div>
                    </label>
                    : null}
                <br />
                <label className="form-label">Add Contact<br />
                    <input id="addContact"
                        type="text"
                        name="contact"
                        onChange={e => setContactNote({ ...contactNote, 'date': today, 'contact': e.target.value })} />
                </label><br />
                <label className="form-label">Add Note<br />
                    <textarea id="addNote"
                        type="textarea"
                        name="note"
                        onChange={e => {setContactNote({ ...contactNote, 
                            'note': e.target.value,
                            'ApplicationId': tempApp.id,
                            'createdAt': today,
                            'updatedAt': today
                        })
                        }} />
                </label><br />
                <button type="submit">Submit Application</button>
            </form>
        </div>
    )
}