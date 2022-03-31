import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Addcustomer from './Addcustomer';
import Addtraining from './Addtraining';
import Editcustomer from './Editcustomer';
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from 'react-router-dom';

export default function Customerlist (){
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

   const  fetchData = () => {
       fetch('https://customerrest.herokuapp.com/api/customers')
       .then(response => response.json())
       .then(data => setCustomers(data.content))
       .catch(err => console.error(err))
   }

   const deleteCustomer = (link) => {
       if (window.confirm('Are you sure?')){
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
       }
   }

   const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
   }

   const saveTraining = (training) => {
    fetch('https://customerrest.herokuapp.com/api/trainings', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(training)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
}


   const updateCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
       })
       .then(res => fetchData())
       .catch(err => console.error(err))
   }
   const columns = [
       {
          Header: 'Firs name' ,
          accessor: 'firstname'
       },
       {
           Header: 'Last name',
           accessor: 'lastname'
       },
       {
           Header: 'Street address',
           accessor: 'streetaddress'
       },
       {
           Header: 'Postal code',
           accessor: 'postcode'
       },
       {
           Header: 'City',
           accessor: 'city'
       },
       {
           Header: 'Email',
           accessor: 'email'
       },
       {
            Header: 'Phone',
            accessor: 'phone'
       },
       {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Addtraining saveTraining={saveTraining} customer={row.original}/>
       },
       {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
       },
       {
           sortable: false,
           filterable: false,
           width: 100,
           accessor: 'links[0].href',
           Cell: row => <Button size="small" color="secondary" onClick={() => deleteCustomer(row.value)}>Delete</Button>
       }
   ]
    return (
        <div style={{margin: 50}}>
            <Addcustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable={true} data={customers} columns={columns} />
        </div>
    );
}