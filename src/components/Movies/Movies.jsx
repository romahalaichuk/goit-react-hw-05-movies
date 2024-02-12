import React, { useState } from 'react';
import { searchMovies } from 'api';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchMovies(searchTerm);
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
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
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.resultsContainer}>
        {searchResults.map(movie => (
          <div key={movie.id} className={styles.movie}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
            {/* Add more details or links */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
