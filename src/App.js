import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Calender from './components/Calender';
import Statistics from './components/Statistics';

function App() {
  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Customer and Exercise management software
            </Typography>
          </Toolbar>
        </AppBar>
        <div id="router"></div>
          <BrowserRouter>
            <Link style={{margin: 50}} to="/">Customers</Link>{' '}
            <Link style={{margin: 50}} to="/components/Traininglist">Trainings</Link>{' '}
            <Link style={{margin: 50}} to="/components/Calender">Calendar</Link>{' '}
            <Link style={{margin: 50}} to="/components/Statistics">Statistics</Link>{' '}
            <Routes>
              <Route exact path="/" element={<Customerlist />} />
              <Route path="/components/Traininglist" element={<Traininglist />} />
              <Route path="/components/Calender" element={<Calender />} />
              <Route path="/components/Statistics" element={<Statistics/>} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
