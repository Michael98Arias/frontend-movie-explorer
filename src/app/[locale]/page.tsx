"use client";

import { useTranslations } from 'next-intl';
import { useMovies } from '../hooks/useMovies';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';

import '../globals.css';

export default function HomePage(): JSX.Element {
  const t = useTranslations('HomePage');
  const { movies, loading, error, hasMore, lastElementRef } = useMovies();

  return (
    <div>
      <Navbar />
      <button className="btn btn-outline">Default</button>
      <h1>{t('title')}</h1>
      <div className="movie-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <div ref={lastElementRef}></div>
      </div>
      {loading && <p>{t('loading')}</p>}
      {!hasMore && <p>{t('noMoreMovies')}</p>}
      {error && <p>{t('error')}</p>}
    </div>
  );
}
