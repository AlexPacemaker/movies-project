import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import styles from "./Main.module.scss";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  //функция скортировки по категориям
  const searchMovies = (str, type = "all") => {
    setLoading(true);
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== "all" ? `&type=${type}` : ""
        }`
      )
      .then((res) => {
        setMovies(res.data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  //получаем первую загрузку на страницу по API
  useEffect(() => {
    try {
      (async () => {
        await axios.get(API_URL).then((res) => {
          setMovies(res.data.Search);
          setLoading(false);
        });
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  //рефактор карточек и проверка на то, что данные полученные
  const moviesCards =
    movies && movies.length ? (
      movies.map((movie) => <Card {...movie} key={movie.imdbID} />)
    ) : (
      <h3 className={styles.notFound}>No movies found. Please try again!</h3>
    );

  //отрисовываем компонент поиска, а также прелоадер, если не загружены данные с бэка
  return (
    <>
      <Search searchMovies={searchMovies} />
      <div className={styles.container}>
        {loading ? <Preloader /> : moviesCards}
      </div>
    </>
  );
};

export default Main;
