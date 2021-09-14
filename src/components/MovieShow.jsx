import { useParams } from "react-router";

export default function MovieShow({ movies }) {
  const params = useParams();
  const movie = movies[params.movieId];
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{JSON.stringify(movie)}</p>
    </div>
  );
}
