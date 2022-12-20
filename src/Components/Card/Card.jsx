//Card of item

import styles from "./Card.module.scss";

const Card = ({ title, year, imgSrc }) => {
  return (
    <div className={styles.cardOfMovie}>
      <h3>{title}</h3>
      <img src={imgSrc} width={320} height={410} alt='#' />
      <p>{year}</p>
    </div>
  );
};

export default Card;
