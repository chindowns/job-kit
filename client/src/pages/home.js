import React from 'react';
import { useHistory } from 'react-router-dom';
import { Store, keys } from 'idb-keyval';

export default () => {
    const applicationStore = new Store('job-manager', 'applications');
    const history = useHistory();

    // if applications exist show View Applications
    keys(applicationStore).then(keys => {
       if (keys.length > 0)  {history.replace('/view')} ;
    })

    return (
        <div id="jumbo" className="radius">
            <h1 className="text-shadow slate-blue">Job Application Manager</h1>
            <p>
                Job Application Manager Light is a simple and fast tool that helps you keep track of all your Job Applications and keep notes during the application / interview process.
            </p>
            <p>
                CLICK on "Add Application" to get started
            </p>
            <p>
                This app uses your browsers internal DB, indexedDB to store application info.  <br />
                The full Job Application Manager supports access from multible devices and browsers. <br />
                Use <a href="https://job-kit.herokuapp.com" target="_blank" rel="noopener noreferrer" >https://job-kit.herokuapp.com</a>
            </p>
        </div>
    )

}