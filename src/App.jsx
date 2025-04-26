import { useEffect, useState } from "react";
import { Container, Typography, TextField, Grid, CircularProgress } from "@mui/material";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://cors-anywhere.herokuapp.com/https://freetestapi.com/api/v1/movies");

      const data = await response.json();
      console.log("Movies fetched:", data);
      setMovies(data);
      setFilteredMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom mt={4}>
        🎬 Movie Database
      </Typography>

      <TextField
        fullWidth
        placeholder="Search Movies..."
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 4 }}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          {filteredMovies.map((movie) => (
            
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default App;
