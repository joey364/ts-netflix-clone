import React, { useEffect, useState } from 'react';
import requests from '../../utils/requests';
import axios from '../../utils/axios';
import YouTube from 'react-youtube';
import { opts } from '../../utils/YouTube';
import './styles/Banner.css';

function Banner() {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';
  const [movie, setMovie] = useState([] as any);
  const [trailerUrl, setTrailerUrl] = useState('');

  const getSeriesTrailer = async (movie: any) => {
    await axios
      .get(requests.fetchSeriesTrailer.replace(/id/, `${movie?.id}`))
      .then((response) => {
        let movieTrailer = response.data.results[0].key;
        setTrailerUrl(movieTrailer);
      })
      .catch((error) => console.log(error));
  };

  const truncate = (str: string, n: number): string => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios
        .get(requests.fetchNetflixOriginals)
        .then((response) => {
          let movie =
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ];
          setMovie(movie);
        })
        .catch((err) => alert(err));
      return request;
    };
    fetchData();
  }, []);

  return (
    <>
      <header
        onClick={() => {
          if (trailerUrl) {
            setTrailerUrl('');
          }
        }}
        className="banner"
        style={{
          backgroundImage: `url(${imageBaseUrl + movie?.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className="banner__contents">
          <div className="banner__contents">
            <div className="banner__title">
              {movie?.name || movie?.original_name || movie?.title}
            </div>
            <div className="banner__buttons">
              <button
                onClick={() => getSeriesTrailer(movie)}
                className="banner__button"
              >
                Play
              </button>
              <button className="banner__button">My List</button>
            </div>
            <div className="banner__description">
              {truncate(movie?.overview, 150)}
            </div>
          </div>
        </div>
        <div className="banner--fade-bottom"></div>
      </header>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
}

export default Banner;
