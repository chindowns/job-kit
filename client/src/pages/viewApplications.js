import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row' ;
import Card from '../components/cards';
import axios from 'axios';
// import { Store, get, keys } from 'idb-keyval';

export default () => {
  // const applicationStore = new Store('job-manager', 'applications');
  const [applications, setApplications] = useState([])

  // set the user
  const userId = window.localStorage.getItem('userID')

    useEffect(() => {
      if(applications.length === 0){
        axios.get(`/api/application/${userId}`)
          .then(res => setApplications(res.data))
      }
    },[applications, userId])


    // Campares the property value of Stage for each application
    function compareValues(stage, order = 'desc') {
        // Sorts the application by 'stage' in descending order so '0-declined' goes to the end of the list
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(stage) || !b.hasOwnProperty(stage)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[stage] === 'string')
            ? a[stage].toUpperCase() : a[stage];
          const varB = (typeof b[stage] === 'string')
            ? b[stage].toUpperCase() : b[stage];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    return (
        <Row style={{ margin: '15px 15px' }}>
            {applications.sort(compareValues('stage')).map((application, idx) => (<Card application = {application} key = {idx} />))}
        </Row>
    )
}