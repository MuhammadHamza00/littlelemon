import React, { useReducer, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookForm from './BookForm';
import { fetchAvailableTimes,submitFormData } from '../ApiMimic';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

// Reducer
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};


const updateTimes =  (selectedDate) => {
  return fetchAvailableTimes(selectedDate);
};

// Initializer
const initializeTimes = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month (0-indexed) and pad with '0' if needed
  const day = String(currentDate.getDate()).padStart(2, '0'); // Pad with '0' if needed
  const formattedDate = `${year}-${month}-${day}`;

  return fetchAvailableTimes(formattedDate);
};
export default function BookPage() {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    var result = submitFormData(formData);
    if (result) {
      alert('Form Data Submiited Successfully!');
      navigate('/submit');
       } else {
    }
  };

  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    const updatedTimes = updateTimes(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes });
  };

  useEffect(() => {
    const selectedDate = '2023-09-10';
    handleDateChange(selectedDate);
  }, []);

  
  return (
    
    <div>
      <Header />
      <BookForm availableTimes={availableTimes} onDateChange={handleDateChange} SendForm={handleSubmit} />
      <Footer />
    </div>
  );
}
