import React, { useState } from 'react';
import { Result } from '../../../types/movie'; 
import { isRecentDate } from '../../../utils/dateUtils';

interface MovieCardProps {
  movie: Result;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const voteAverageScaled = (movie.vote_average * 10).toFixed(1);
  const isNew = isRecentDate(movie.release_date, 2);

  const handleIconClick = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      localStorage.setItem('favoriteMovieId', movie.id.toString());
    } else {
      localStorage.removeItem('favoriteMovieId');
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="card bg-base-100 w-80 shadow-md">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '15.5rem', height: '20.5rem', objectFit: 'cover' }}
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg">
            {movie.title}
            {isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <div className="card-actions justify-end mt-4">
            <div className="badge badge-outline text-xs">Genre: {movie.genre_ids.join(', ')}</div>
          </div>
          <div className="stat mt-4">
            <button
              onClick={handleIconClick}
              className={`stat-figure ${isFavorite ? 'text-red-500' : 'text-primary'} focus:outline-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <div className="stat-title text-sm">Rating</div>
            <div className="stat-value text-primary text-lg">{voteAverageScaled} / 10</div>
            <div className="stat-desc text-xs">Based on user reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
