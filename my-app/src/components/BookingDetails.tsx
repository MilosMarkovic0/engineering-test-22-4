// BookingDetails.tsx

import React from 'react';

interface Booking {
  id: string;
  user: string;
  description: string;
  parc: string;
  bookingDate: string;
  comments: string;
}

interface BookingDetailsProps {
  booking: Booking;
  onDelete: (id: string) => void;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ booking, onDelete }) => {
  const handleDelete = () => {
    onDelete(booking.id);
  };

  return (
    <div>
      <h2>Booking Details</h2>
      <p>User: {booking.user}</p>
      <p>Description: {booking.description}</p>
      <p>Parc: {booking.parc}</p>
      <p>Booking Date: {booking.bookingDate}</p>
      <p>Comments: {booking.comments}</p>
      <button onClick={handleDelete}>Delete Booking</button>
    </div>
  );
};

export default BookingDetails;
