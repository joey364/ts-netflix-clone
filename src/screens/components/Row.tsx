import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import { opts } from '../../utils/YouTube';
import './styles/Row.css';

function Row({ title, fetchUrl, isLargeRow }: any) {
  const imageBaseUrl: string = 'https://image.tmdb.org/t/p/w500/';
  const [movies, setMovies] = useState([] as any);
  const [trailerUrl, setTrailerUrl] = useState('');

  const shuffle = (array: []): void => {
    for (let i: number = array.length - 1; i > 0; i--) {
      let j: number = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios
        .get(fetchUrl)
        .then((response) => {
          let results = response.data.results;
          shuffle(results);
          setMovies(results);
        })
        .catch((error) => console.log(error.message));
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: any) => {
    let movieTrailer, seriesTrailer;

    await axios
      .get(requests.fetchSeriesTrailer.replace(/id/, `${movie?.id}`))
      .then((response) => {
        seriesTrailer = response.data.results[0].key;
        setTrailerUrl(seriesTrailer);
      })
      .catch((error) => console.log(error));

    if (!seriesTrailer) {
      await axios
        .get(requests.fetchMovieTrailer.replace(/id/, `${movie?.id}`))
        .then((response) => {
          movieTrailer = response.data.results[0].key;
          setTrailerUrl(movieTrailer);
        })
        .catch((error) => console.log(error));
    }

    if (trailerUrl) {
      setTrailerUrl('');
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie: any) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={movie.id}
                src={`${imageBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title || movie.original_name}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
