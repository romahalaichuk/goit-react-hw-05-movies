import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviews}>
      <h2>Reviews</h2>
      <div className={styles.reviewList}>
        {reviews.map(review => (
          <div key={review.id} className={styles.review}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
            {/* Add more details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
