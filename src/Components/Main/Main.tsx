import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import styles from "./Main.module.scss";
import axios from "axios";
import { Movie as MovieType } from "../../@types/types";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`;

interface MainState {
  movies: MovieType[];
  loading: boolean;
}

const Main: React.FC = () => {
  const [state, setState] = useState<MainState>({ movies: [], loading: true });

  //функция скортировки по категориям
  const searchMovies = (str: string, type = "all") => {
    setState({ ...state, loading: true });
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
      .then((res) => {
        setState({ movies: res.data.Search, loading: false });
      })
      .catch((error) => {
        console.log(error);
        setState({ ...state, loading: true });
      });
  };

  //получаем первую загрузку на страницу по API
  useEffect(() => {
    try {
      (async () => {
        await axios.get(API_URL).then((res) => {
          setState({ movies: res.data.Search, loading: false });
        });
      })();
    } catch (error) {
      console.log(error);
      setState({ ...state, loading: true });
    }
  }, []);

  //рефактор карточек и проверка на то, что данные полученные
  const moviesCards =
    state.movies && state.movies.length ? (
      state.movies.map((movie: MovieType) => (
        <Card movie={movie} key={movie.imdbID} />
      ))
    ) : (
      <h3 className={styles.notFound}>No movies found. Please try again!</h3>
    );

  //отрисовываем компонент поиска, а также прелоадер, если не загружены данные с бэка
  return (
    <>
      <Search searchMovies={searchMovies} />
      <div className={styles.container}>
        {state.loading ? <Preloader /> : moviesCards}
      </div>
    </>
  );
};

export default Main;
