//Card of item
import styles from "./Card.module.scss";
import naImage from "../../Assets/images/na.jpg"; // импортируем картинку NA

const Card = ({ Title: title, Year: year, Poster: imgSrc }) => {
  return (
    <div className={styles.cardOfMovie}>
      <h3 className={styles.title}>{title}</h3>
      {imgSrc === "N/A" ? (
        // если значение imgSrc равно 'N/A', то отображаем картинку NA
        <img src={naImage} width={250} alt='NA' />
      ) : (
        // если значение imgSrc не равно 'N/A', то отображаем изображение из URL
        <img src={imgSrc} width={250} alt='Movie poster' />
      )}
      <p>{year}</p>
    </div>
  );
};

export default Card;
