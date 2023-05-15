import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import styles from "./Main.module.scss";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        console.log(data.Search);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.Search);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const moviesCards =
    movies && movies.length ? (
      movies.map((movie) => <Card {...movie} key={movie.imdbID} />)
    ) : (
      <h3>No movies found. Please try again!</h3>
    );

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
