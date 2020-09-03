import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default () => {

    const [application, setApplication] = useState({});
    // const [jobDescription, setJobDescription] = useState({});

    const today = new Date().toISOString().slice(0, 10);
    // const applicationStore = new Store('job-manager', 'applications')

    const userId = window.localStorage.getItem('userID');
    // get usrID


    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Form")
        const newApplication = {
            "company": application.company,
            "title": application.title,
            "description": application.description,
            "source": application.source,
            "resume": application.resume,
            "dateApplied": today,
            "stage": "1 - Applied",
            "UserId": userId
        }

        axios.post('/api/application', newApplication)
        .then(res => history.replace('view')) 
        .catch(err => console.log("Error: ", err));

        // set(application.companyName, newApplication, applicationStore)
        //     .then(() => window.location.reload(false))
        //     .catch((err) => console.log('It failed!', err));

    }

    return (
        <div className='form'>
            <form className="form-group form-add" onSubmit={handleSubmit}>
                <label className="form-label">Company Name<br />
                <input id="inputCompanyName"
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    onChange={e => setApplication({ ...application, 'company': e.target.value })} />
                </label>
                <label className="form-label">Job Title<br />
                <input id="inputJobTitle"
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    onChange={e => setApplication({ ...application, 'title': e.target.value })} />
                </label>
                <br />
                <label className="form-label">Link to Job Posting<br />
                <input id="inputSource"
                    type="url"
                    name="source"
                    placeholder="Link to Source"
                    onChange={e => {
                        setApplication({ ...application, 'source': e.target.value });
                        // fetch(application.source)
                        // .then(response => console.log(response))
                }} />
                </label>
                <label className="form-label">Link to Resume Used<br />
                <input id="inputResume"
                    type="url"
                    name="resume"
                    placeholder="Link to Resume"
                    onChange={e => setApplication({ ...application, 'resume': e.target.value })} />
                </label>
                <br />
                <label className="form-label">Job Description<br />
                <textarea id="inputJobDescription"
                    type="textarea"
                    name="description"
                    wrap="soft"
                    placeholder="Job Description"
                    onChange={e => setApplication({ ...application, 'description': e.target.value })} />
                </label>
                <br />

                <button type="submit">Submit Application</button>
            </form>
        </div>
    )
}