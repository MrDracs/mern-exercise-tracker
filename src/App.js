import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import CreateExercise from './components/create-exercise.component';
import EditExercise from './components/edit-exercise.component';
import CreateUser from './components/create-user.component';
import ExerciseList from './components/exercises-list.component';
function App() {
    return (
      <Router>
        <div className='container' style={
          {paddingTop: '10px'}
        }>
        <Navbar/>
        <br/>
        <Routes>
        <Route path="/" exact Component={ExerciseList}/>
        <Route path="/edit/:id" Component={EditExercise}/>
        <Route path="/create" Component={CreateExercise}/>
        <Route path="/user" Component={CreateUser}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
