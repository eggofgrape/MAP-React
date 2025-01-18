import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id,coverImage, title, summary, genres}) { //component 를 부모에서 받아온다는 뜻.
    return  <div>
    <img src={coverImage} alt={title}/>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary.length >235? `${summary.slice(0,235)}...`:summary}</p>
    <ul>
      {genres.map((g) => ( //g라는 이름은 맘대로 해도된다. 고유한 값이면 뭐든 상관 없음. 
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;