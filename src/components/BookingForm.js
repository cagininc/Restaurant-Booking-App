"use client"
import React from 'react';

const BookingForm = ({formData,handleChange,handleSubmit,availableTimes}) => {
  return (
    <form data-theme="Lemonade" onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mb-16">
  <h1 className="text-2xl font-bold mb-6">Book Now</h1>
  
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
    <input 
      type="text"
      id="name"
      name="name"
      placeholder="Your name"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(e) => handleChange("name", e.target.value)}
      value={formData.name}
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
    <input 
      type="date"
      id="date"
      name="date"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(e) => handleChange("date", e.target.value)}
      value={formData.date}
    />
  </div>
  
  <div className="mb-4">
    <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Choose time</label>
    <select
      id="time"
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={(e) => handleChange("time", e.target.value)}
      value={formData.time}
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
  
  <div className="mb-4">
    <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Guests</label>
    <input 
      type="number"
      id="guests"
      name="guests"
      placeholder="Number of guests"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      onChange={(e) => handleChange("guests", e.target.value)}
      value={formData.guests}
    />
  </div>
  
  <div className="mb-6">
    <label htmlFor="occasion" className="block text-gray-700 text-sm font-bold mb-2">Occasion</label>
    <select
      id="occasion"
      name="occasion"
      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      onChange={(e) => handleChange("occasion", e.target.value)}
      value={formData.occasion}
    >
      <option value="" disabled>Select Occasion</option>
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
      <option value="Celebration">Celebration</option>
      <option value="Other">Other</option>
    </select>
  </div>
  
  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Book
  </button>
</form>








  );
};



    // <form data-theme="Lemonade" onSubmit={handleSubmit}>
    //   <label htmlFor="name"><h1>Book Now</h1></label>
    //   <div className="form-group">
    //     <label htmlFor="name">Name</label>
    //     <input placeholder='Your name'
    //       type="text"
    //       id="name"
    //       name="name"
    //       className="form-control"
    //       onChange={(e) =>handleChange("name", e.target.value)}
    //       value={formData.name}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="date">Date</label>
    //     <input
    //       type="date"
    //       id="date"
    //       name="date"
    //       className="form-control"
    //       onChange={(e)=>handleChange("date",e.target.value)}
    //       value={formData.date}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="time">Choose time</label>
    //     <select
    //       id="time"
    //       className="form-control"
    //       onChange={(e)=>handleChange("time",e.target.value)}
    //       value= {formData.time}
    //     >
    //       <option value="15:00">15:00</option>
    //       <option value="16:00">16:00</option>
    //       <option value="17:00">17:00</option>
    //       <option value="18:00">18:00</option>
    //       <option value="19:00">19:00</option>
    //       <option value="20:00">20:00</option>
    //       <option value="21:00">21:00</option>
    //     </select>
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="guests">Guests</label>
    //     <input placeholder='Number of guests'
    //       type="number"
    //       id="guests"
    //       name="guests"
    //       className="form-control"
    //       onChange={(e)=>handleChange("guests",e.target.value)}
    //       value={formData.guests}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="occasion">Occasion</label>
    //     <select 
    //       id="occasion"
    //       name="occasion"
    //       className="form-control"


















export default BookingForm;
