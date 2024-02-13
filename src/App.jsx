// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Router basename="/goit-react-hw-05-movies">
      <div>
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
