import React from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import Movie from '../../data/Movie';
import { Outlet } from 'react-router-dom';

class Main extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    // console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.loader}>
            <span className={styles.loaderText}>Загрузка...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((el) => {
              // console.log(el);
              return (
                <Movie
                  key={el.id}
                  title={el.title}
                  id={el.id}
                  year={el.year}
                  summary={el.summary}
                  poster={el.large_cover_image}
                  genres={el.genres}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Main;
