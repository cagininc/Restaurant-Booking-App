"use client"
import React from 'react';

const BookingForm = ({formData,handleChange,handleSubmit,availableTimes}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          className="form-control"
          onChange={handleChange}
        >
          <option value="">Select time</option>
          {/* Available times will be dynamically added here */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          className="form-control"
          onChange={handleChange}
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
