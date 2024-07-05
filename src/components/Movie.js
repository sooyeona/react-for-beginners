import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie_comp}>
      <div>
        <h2>
          <Link to={`/detail/${id}`}> {title} </Link>
        </h2>
        <ul>
          [
          {genres.map((genreItem, i) => (
            <li key={i}>{genreItem}</li>
          ))}
          ]
        </ul>
        <p className={styles.summary}>{summary}</p>
      </div>
      <img src={coverImg} alt={title} />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
