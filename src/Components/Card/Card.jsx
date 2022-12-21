//Card of item

import styles from "./Card.module.scss";

const Card = ({ Title: title, Year: year, Poster: imgSrc }) => {
  return (
    <div className={styles.cardOfMovie}>
      <h3>{title}</h3>
      <img src={imgSrc} width={220} height={310} alt='#' />
      <p>{year}</p>
    </div>
  );
};

export default Card;
