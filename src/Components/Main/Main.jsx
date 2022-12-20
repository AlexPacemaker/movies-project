//Main

import Card from "../Card/Card";
import styles from "./Main.module.scss";

const Main = ({ movieInfo }) => {
  return (
    <div className={styles.container}>
      {movieInfo.map((movie) => (
        <Card title={movie.Title} key={movie.imdbID} year={movie.Year} imgSrc={movie.Poster} />
      ))}
    </div>
  );
};

export default Main;
