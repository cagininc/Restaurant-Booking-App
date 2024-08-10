"use client"
import React, { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';

// Function to fetch available times from the API
async function fetchAPI(date) {
  const response = await fetch(`http://localhost:3001/api/availableTimes?date=${date}`);
  const data = await response.json();
  return data.times;
}

// Function to submit the booking form data to the API
async function submitAPI(formData) {
  const response = await fetch('http://localhost:3001/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  return result.success;
}

// Initial state for the available times
function initializeTimes() {
  return []; // Start with an empty array; data will come from the API
}

// Reducer function for managing available times state
function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
}


function Main() {
  console.log("hello")
  const [formData, setFormData] = useState({
    name: "",
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  useEffect(() => {
    if (formData.date) {
      fetchAPI(formData.date).then(times => {
        dispatch({ type: 'UPDATE_TIMES', payload: times });
      }).catch(error => console.error('Error fetching available times:', error));
    }
  }, [formData.date]);

  const handleChange = (id, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      const success = await submitAPI(formData);
      if (success) {
        alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for ${formData.occasion}`);
      } else {
        alert('Failed to submit the reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div>
      <BookingForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
      />
   
   <div>
        <h2>Form Data:</h2>
        <ul>
          {Object.entries(formData).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
