import _ from 'lodash';
import Button from '@material-ui/core/Button';
import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from 'recharts';

export default function Statistics () {


  const [trainings, setTrainings] = useState([{duration: '', name: ''}]);

  useEffect(() => fetchData(), []);

 const  fetchData = () => {
     fetch('https://customerrest.herokuapp.com/api/trainings')
     .then(response => response.json())
     .then(data => setTrainings(data.content))
     .catch(err => console.error(err))
 }

  const sum = () => {
    console.log(trainings);
    var ggroup = trainings;
    _.find(ggroup, _.matchesProperty('Gym training'));
    console.log(ggroup);
    _.sumBy(trainings, 'activity');
} 

    return (
      <div>
        <BarChart width={730} height={250} data={trainings}>
          <XAxis dataKey="activity"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
      <Button onClick={() => sum()}>Show in groups</Button>
      </div>
    );
}