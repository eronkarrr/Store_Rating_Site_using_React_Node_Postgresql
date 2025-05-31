import React, { useEffect, useState } from 'react';
import { fetchRatings } from '../services/ratingService';

const RatingsPage = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRatings = async () => {
      try {
        const data = await fetchRatings();
        setRatings(data);
      } catch (error) {
        console.error('Failed to fetch ratings', error);
      } finally {
        setLoading(false);
      }
    };
    getRatings();
  }, []);

  if (loading) {
    return <div>Loading ratings...</div>;
  }

  return (
    <div>
      <h1>Ratings</h1>
      {ratings.length === 0 && <p>No ratings available.</p>}
      <ul>
        {ratings.map(rating => (
          <li key={rating.id}>
            <strong>{rating.storeName}</strong> rated {rating.score} / 5 by {rating.userName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingsPage;
