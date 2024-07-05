import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./../components/Loading";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
          {movieDetail.title}
          {movieDetail.genres.map((genreItem, i) => (
            <p key={i}>{genreItem}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
