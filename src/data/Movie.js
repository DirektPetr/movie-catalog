import React from 'react';
import styles from './Movie.module.css';
import PropTypes from 'prop-types';

const Movie = ({ year, title, summary, poster, genres }) => {
  return (
    <div className={styles.movie}>
      <img src={poster} alt={title} title={title} />
      <div className={styles.movie__column}>
        <h3 className={styles.movie__title}>{title}</h3>
        <h5 className={styles.movie__year}>{year}</h5>
        <ul className={styles.movie__genres}>
          {genres.map((genre, idx) => {
            return (
              <li key={idx} className={styles.movie__genre}>
                {genre}
              </li>
            );
          })}
        </ul>
        <p className={styles.movie__summary}>{summary.slice(0, 130)}...</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
