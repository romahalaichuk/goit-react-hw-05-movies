import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <h2>Cast</h2>
      <div className={styles.castList}>
        {cast.map(actor => (
          <div key={actor.id} className={styles.actor}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImage}
              />
            )}
            <p className={styles.actorName}>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
