import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 220, minHeight: 400, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        image={movie.poster || "https://via.placeholder.com/220x310"}
        alt={movie.title}
        sx={{
          width: '100%',
          height: 310,
          objectFit: 'cover'
        }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography 
          variant="h6" 
          sx={{ fontSize: '1rem', fontWeight: 'bold', wordWrap: 'break-word', textAlign: 'center' }}
        >
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1, textAlign: 'center' }}>
          {movie.genre} | {movie.year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

