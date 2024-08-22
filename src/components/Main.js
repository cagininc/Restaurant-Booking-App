"use client";
import React, { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';

// Function to initialize available times
function initializeTimes() {
  return [];
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
  
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const submitAPI = async (formData) => {
    try {
      // Sunucuya POST isteği gönder
      const response = await fetch('http://localhost:3002/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Form verilerini JSON formatında gönder
      });
  
      // Yanıtı kontrol et
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Yanıtı JSON formatında al
      const result = await response.json();
      
      // Sunucu yanıtında success alanını kontrol et
      return result.success;
    } catch (error) {
      console.error('Error in submitAPI:', error);
      throw error; // Hatanın catch bloğuna düşmesini sağlamak için tekrar fırlat
    }
  };
  
  const fetchAPI = async (date) => {
    try {
      // Tarihi 'YYYY-MM-DD' formatında bir string olarak almamız gerekiyor
      const formattedDate = new Date(date).toISOString().split('T')[0]; 
  
      const response = await fetch(`http://localhost:3002/api/availableTimes?date=${formattedDate}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.times || [];
    } catch (error) {
      console.error('Error fetching available times:', error);
      return [];
    }
  };
  

useEffect(() => {
    if (formData.date) {
      fetchAPI(formData.date)
        .then(times => {
          dispatch({ type: 'UPDATE_TIMES', payload: times });
        })
        .catch(error => console.error('Error fetching available times:', error));
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
    setSubmittedData(formData);
    try {
      const success = await submitAPI(formData);
      if (success) {
        alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for ${formData.occasion}`);
      } else { setSubmittedData(formData);
        alert('Failed to submit the reservation. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div id="main-form">
      <BookingForm
      
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        availableTimes={availableTimes}
      />
      {/* <div data-theme="Lemonade">
        <h2>Form Data:</h2>
        {submittedData?(
        <ul>
          {Object.entries(submittedData).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        ):(
        <p>No data submitted yet.</p>
        )}
      </div> */}
    </div>
  );
}

export default Main;
