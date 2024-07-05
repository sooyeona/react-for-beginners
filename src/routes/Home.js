import { useState, useEffect } from "react";
import Movie from "./../components/Movie";
import Loading from "./../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    //then사용 대신 요즘 사용하는 것
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  // =======then사용 대신 요즘 사용하는 것
  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {movies.map((movieItem, i) => (
            <Movie
              key={movieItem.id}
              id={movieItem.id}
              coverImg={movieItem.medium_cover_image}
              title={movieItem.title}
              summary={movieItem.summary}
              genres={movieItem.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
