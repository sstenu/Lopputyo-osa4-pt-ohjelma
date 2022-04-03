import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Edittraining from './Edittraining';
import Addtraining from './Addtraining';
import Calender from './Calender';


export default function Traininglist (){
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

   const  fetchData = () => {
       fetch('https://customerrest.herokuapp.com/api/trainings')
       .then(response => response.json())
       .then(data => setTrainings(data.content))
       .catch(err => console.error(err))
   }

   const deleteTraining = (link) => {
       if (window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
       }
   }

   const updateTraining = (training, link) => {
        fetch(link, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
       })
       .then(res => fetchData())
       .catch(err => console.error(err))
   }

   const columns = [
       {
           Header: 'Date',
           accessor: 'date',
           Cell: row => {
              var moment = require('moment');
              return (moment(row.value).format("DD MM YY hh:mm a"))
           }
       },
       {
           Header: 'Duration',
           accessor: 'duration'
       },
       {
           Header: 'Activity',
           accessor: 'activity'
       },
       {
           Header: 'Customer',
           accessor: 'links[2].href',
           Cell: row => {
            const [newValue, setNewValue] = useState('');
                fetch(row.value)
                .then(response => response.json())
                .then(data => setNewValue(data.firstname))
                return (newValue)
            }
       },
       {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Edittraining updateTraining={updateTraining} training={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button size="small" color="secondary" onClick={() => deleteTraining(row.value)}>Delete</Button>
        }
   ]
    return (
        <div style={{margin: 50}}>
            <ReactTable filterable={true} data={trainings} columns={columns} />
        </div>
    );
}