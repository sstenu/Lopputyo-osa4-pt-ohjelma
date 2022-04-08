import { divide } from 'lodash';
import React, {useState, useEffect} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Statistics () {


  const [trainings, setTrainigs] = useState([]);
  const [train, setTrain] = useState({name: '', duration: ''});
  const [trains, setTrains] = useState([]);

  useEffect(() => fetchData(), []);

 const  fetchData = () => {
     fetch('https://customerrest.herokuapp.com/api/trainings')
     .then(response => response.json())
     .then(data => setTrainigs(data.content))
     .catch(err => console.error(err))
      divide();
      console.log(trainings)
 }

const divide = () => {
  trainings.map((exercise) => 
  setTrain({name: exercise.activity, duration: exercise.duration}),
  setTrains([...trains, train])
  );
  console.log(trains)
  console.log(trainings)
}

const data = [
  {
    name: 'Page A',
    duration: 4000,
  },
  {
    name: 'Page B',
    duration: 3000,
  },
  {
    name: 'Page C',
    duration: 2000,
  },
  {
    name: 'Page D',
    duration: 2780,
  },
  {
    name: 'Page E',
    duration: 1890,
  },
  {
    name: 'Page F',
    duration: 2390,
  },
  {
    name: 'Page G',
    duration: 3490,
  },
];
       
    return (
      <BarChart width={730} height={250} data={trains}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    );
}