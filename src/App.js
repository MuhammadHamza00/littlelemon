import './App.css';
import React from "react";
import BookPage from './Components/BookPage';
import Submit from './Components/Submit';

import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BookForm from './Components/BookForm';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/booking" element={<BookPage/>}></Route>
        <Route path="/bookingForm" element={<BookForm/>}></Route>
        <Route path="/submit" element={<Submit/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
