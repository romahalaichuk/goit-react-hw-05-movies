import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { getTrendingMovies } from 'api';
import styles from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.home}>
      <h2>Trending Today</h2>
      <div className={styles.moviesContainer}>
        {trendingMovies.map(movie => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className={styles.movie}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
