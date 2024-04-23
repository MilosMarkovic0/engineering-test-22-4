// BookingList.tsx

import React, { useState, useEffect } from 'react';
import { fetchBookings, deleteBooking } from '../services/api';
import BookingDetails from './BookingDetails';

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const fetchAllBookings = async () => {
    try {
      const data = await fetchBookings();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDeleteBooking = async (id: string) => {
    try {
      await deleteBooking(id);
      fetchAllBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div>
      <h2>Bookings</h2>
      {bookings.map((booking: any) => (
        <BookingDetails key={booking.id} booking={booking} onDelete={handleDeleteBooking} />
      ))}
    </div>
  );
};

export default BookingList;
