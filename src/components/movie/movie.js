import { useState, useEffect } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  // async & await written out function
  // const getMovies = async () => {
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <h1> Movie</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img alt="cover" src={movie.medium_cover_image} />
              <h3>{movie.title}</h3>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movie;
