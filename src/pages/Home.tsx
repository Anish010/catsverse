import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cats-world/breeds"); // Navigate to /cats-world/breeds
  };

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Welcome to CATSVERSE
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Discover a variety of cat breeds and learn more about your favorite
          furry friends.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleNavigate}
          sx={{ padding: "0.75rem 2rem", fontSize: "1.1rem" }}
        >
          Click to Explore
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
