//Main
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import styles from "./Main.module.scss";

const API_URl = "http://www.omdbapi.com/?apikey=1304f3a9&s=x-files";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URl);
        const movies = await res.json();
        setMovies(movies.Search);
      } catch (error) {
        setError(error.message);
      }
      setIsloading(false);
    })();
  }, []);

  useEffect((str) => {
    (async function Search() {
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=1304f3a9&s=${str}`);
        const movies = await res.json();
        setMovies(movies.Search);
      } catch (error) {
        setError(error.message);
      }
      setIsloading(false);
    })();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <Search searchMovies={Search} />
      <div className={styles.container}>
        {isLoading ? <Preloader /> : movies.map((movie) => <Card {...movie} key={movie.imdbID} />)}
      </div>
    </div>
  );
};

export default Main;
