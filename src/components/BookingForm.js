"use client"
import React from 'react';

const BookingForm = ({formData,handleChange,handleSubmit,availableTimes}) => {
  return (
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"><h1>Book Now</h1></label>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input placeholder='Your name'
          type="text"
          id="name"
          name="name"
          className="form-control"
          onChange={(e) =>handleChange("name", e.target.value)}
          value={formData.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          onChange={(e)=>handleChange("date",e.target.value)}
          value={formData.date}
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          className="form-control"
          onChange={(e)=>handleChange("time",e.target.value)}
          value= {formData.time}
        >
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <input placeholder='Number of guests'
          type="number"
          id="guests"
          name="guests"
          className="form-control"
          onChange={(e)=>handleChange("guests",e.target.value)}
          value={formData.guests}
        />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion"
          name="occasion"
          className="form-control"
          onChange={(e)=>handleChange("occasion",e.target.value)}
          value={formData.occasion}
        >
          <option value="" disabled>Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Celebration">Celebration</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Book</button>
    </form>
  );
};

export default BookingForm;
