import React, { useState } from 'react';
import { searchMovies } from 'api';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      const data = await searchMovies(searchTerm);
      if (data.results.length === 0) {
        setErrorMessage('No movies found.');
      } else {
        setSearchResults(data.results);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.movies}>
      <h2>Search Movies</h2>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress} // Obsługa Enter z klawiatury
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <div className={styles.resultsContainer}>
        {searchResults.map(movie => (
          <div key={movie.id} className={styles.movie}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
