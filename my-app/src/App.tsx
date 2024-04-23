import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParcList from './components/ParcList';
import BookingList from './components/BookingList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>EuroCamp API Frontend</h1>
        <Routes>
          <Route path="/parcs" element={<ParcList></ParcList>} />
          <Route path="/bookings" element={<BookingList></BookingList>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
