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
            <Routes>
              <Route exact path="/" element={<Customerlist />} />
              <Route path="/components/Traininglist" element={<Traininglist />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
