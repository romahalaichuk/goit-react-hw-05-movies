// CastDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastDetails } from 'api';

const CastDetails = () => {
  const { movieId } = useParams();
  const [castDetails, setCastDetails] = useState(null);

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const details = await getCastDetails(movieId);
        setCastDetails(details);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    fetchCastDetails();
  }, [movieId]);

  if (!castDetails) {
    return <div>Loading...</div>;
  }

  return <div>{/* Wyświetl informacje o obsadzie */}</div>;
};

export default CastDetails;
