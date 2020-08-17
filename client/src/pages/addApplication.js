import React, { useState } from "react";
import { Store, set } from 'idb-keyval';

export default () => {

    const [application, setApplication] = useState({});
    const [jobDescription, setJobDescription] = useState({});

    const today = new Date().toISOString().slice(0, 10);
    const applicationStore = new Store('job-manager', 'applications')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Form")
        const newApplication = {
            "companyName": application.companyName,
            "jobTitle": application.jobTitle,
            "jobDescription": application.jobDescription,
            "source": application.source,
            "resume": application.resume,
            "dateApplied": today,
            "stage": "1 - Applied"
        }

        set(application.companyName, newApplication, applicationStore)
            .then(() => window.location.reload(false))
            .catch((err) => console.log('It failed!', err));

    }

    return (
        <div className='form'>
            <form className="form-group form-add" onSubmit={handleSubmit}>
                <label className="form-label">Company Name<br />
                <input id="inputCompanyName"
                    type="text"
                    name="companyName"
                    onChange={e => setApplication({ ...application, 'companyName': e.target.value })}
                    placeholder="Company Name" />
                </label>
                <label className="form-label">Job Title<br />
                <input id="inputJobTitle"
                    type="text"
                    name="jobTitle"
                    onChange={e => setApplication({ ...application, 'jobTitle': e.target.value })}
                    placeholder="Job Title" />
                </label>
                <br />
                <label className="form-label">Link to Job Posting<br />
                <input id="inpurtSource"
                    type="url"
                    name="source"
                    onChange={e => {
                        setApplication({ ...application, 'source': e.target.value });
                        fetch(application.source)
                        .then(response => console.log(response))
                }}
                    placeholder="Link to Source" />
                </label>
                <label className="form-label">Link to Resume Used<br />
                <input id="inputResume"
                    type="url"
                    name="resume"
                    onChange={e => setApplication({ ...application, 'resume': e.target.value })}
                    placeholder="Link to Resume" />
                </label>
                <br />
                <label className="form-label">Job Description<br />
                <textarea id="inputJobDescription"
                    type="textarea"
                    name="jobDescription-Overview"
                    wrap="soft"
                        onChange={e => setApplication({ ...application, 'jobDescription': e.target.value })}
                    placeholder="Job Description" />
                </label>
                <br />

                <button type="submit">Submit Application</button>
            </form>
        </div>
    )
}