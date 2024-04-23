// api.ts

const BASE_URL = 'http://localhost:3001/api/1';

// Function to fetch all parcs
export const fetchParcs = async (): Promise<any[]> => {
    try {
      const response = await fetch(`${BASE_URL}/1/parcs`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch parcs');
    }
  };
  
  // Function to delete a parc by ID
  export const deleteParc = async (id: string): Promise<void> => {
    try {
      await fetch(`${BASE_URL}/1/parcs/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error('Failed to delete parc');
    }
  };

// Function to fetch all bookings
export const fetchBookings = async () => {
  try {
    const response = await fetch(`${BASE_URL}/bookings`);
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

// Function to fetch a single booking by ID
export const fetchBookingById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/bookings/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch booking');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching booking with ID ${id}:`, error);
    throw error;
  }
};

// Function to create a new booking
export const createBooking = async (bookingData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) {
      throw new Error('Failed to create booking');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

// Function to update an existing booking
export const updateBooking = async (id: string, updatedData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/bookings/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Failed to update booking');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

// Function to delete a booking
export const deleteBooking = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/bookings/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete booking');
    }
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

// Similar functions can be implemented for the parcs endpoints
