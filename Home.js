
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home(){
     const [loading, setLoading] = useState(true);
      const [movies, setMovies] = useState([]);
      const getMovies = async () => {
        const json = await (
          await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
          )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
      };
      useEffect(() => {
        getMovies();
      }, []);
      return (
        <div>
          <div className={styles.container}></div>
          {loading ? (
 
                <div className={styles.loader}>
                <span>Loading...</span>
            </div>
          ) : (
            
             <div className={styles.movies}>
              {movies.map((movie) =>( 
                <Movie 
                key={movie.id} //map안에서 render 할 때만 사용한다. 
                id={movie.id}
                coverImage={movie.medium_cover_image} 
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}/>
                ))}
            </div>
          )}
        </div>
      );
}

export default Home;