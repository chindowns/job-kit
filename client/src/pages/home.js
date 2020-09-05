import React from 'react';
import { useHistory } from 'react-router-dom';
import SignIn from '../components/signIn';
// import { Store, keys } from 'idb-keyval';

export default () => {
    // const applicationStore = new Store('job-manager', 'applications');
    const history = useHistory();

    // if applications exist show View Applications
    // keys(applicationStore).then(keys => {
    //    if (keys.length > 0)  {history.replace('/view')} ;
    // })

    return (
    <>
        <div id="jumbo" className="radius">
            <h1 className="text-shadow slate-blue">Job Application Manager</h1>
            <p>
                Job Application Manager is a simple and fast tool that helps you keep track of all your Job Applications and keep notes throughout the interview process.
            </p>
                        
            <p>
                I welcome comments and feedback.  Click the link in the footer to leave a comment.
            </p>
            <p>
                Enter your email below to sign in.  If you it is your first time, you will receive an email with your sign in link.
            </p>
        </div>
        <SignIn />
    </>
    )

}