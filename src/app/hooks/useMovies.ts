"use client";

import { useState, useCallback, useRef } from 'react';
import { fetchMovies } from '../services/movieService';
import { Movie, Result } from '../../types/movie';
import { useLocale } from 'next-intl';


export const useMovies = () => {
  const [movies, setMovies] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const locale = useLocale();

  const observer = useRef<IntersectionObserver | null>(null);

  const loadMovies = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const data: Movie = await fetchMovies(locale, page);
      const newMovies: Result[] = data.results;
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading, locale]);

  const lastElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMovies();
      }
    });

    if (node) observer.current.observe(node);
  }, [loadMovies, loading]);

  return { movies, loading, error, hasMore, lastElementRef };
};
