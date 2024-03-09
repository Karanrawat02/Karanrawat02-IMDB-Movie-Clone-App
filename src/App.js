import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home';
import MovieList from './components/Movielist/movielist';
import Movie from './pages/movieDetail/movieDetail';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<Home />}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
