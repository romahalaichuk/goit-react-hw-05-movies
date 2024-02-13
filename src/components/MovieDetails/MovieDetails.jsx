// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from 'api';
import styles from './MovieDetails.module.css';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);

        const credits = await getMovieCredits(movieId);
        setCast(credits.cast);

        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const handleGoBack = () => {
    window.history.back();
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <div>
        <button onClick={handleGoBack}>Back</button>
      </div>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <div>
        <p>User score: {movieDetails.vote_average}</p>
        <p>Overview: {movieDetails.overview}</p>
        <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        <p>Additional Information:</p>
        <div>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </div>
      </div>

      <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast cast={cast} />} />
        <Route
          path="/movies/:movieId/reviews"
          element={<Reviews reviews={reviews} />}
        />
      </Routes>
    </div>
  );
};

export default MovieDetails;
