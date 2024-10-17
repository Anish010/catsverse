import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Breed } from "../models/breed";
import getBreedById from "../services/getBreedById";
import Grid from "@mui/material/Grid2";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Divider,
  CircularProgress,
  Button,
  Rating,
} from "@mui/material";

const BreedDetail = () => {
  const { breed_id } = useParams<string>();
  const [breed, setBreed] = useState<Breed | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getBreedDetail = async () => {
    try {
      if (breed_id) {
        const breedDetail = await getBreedById(breed_id);
        if (breedDetail && breedDetail.data) {
          setBreed(breedDetail.data);
        }
      } else {
        console.log("Error in fetching details for the breed");
      }
    } catch (error) {
      console.error("Error fetching breed details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBreedDetail();
  }, [breed_id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!breed) {
    return (
      <Box textAlign="center" padding={4}>
        <Typography variant="h5">Breed not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, maxWidth: 1200, margin: "auto" }}>
      <Card
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", md: "40%" }, height: "auto" }}
          image={
            breed.reference_image_id
              ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
              : "https://via.placeholder.com/300"
          }
          alt={breed.name}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" component="div" gutterBottom>
            {breed.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {breed.description}
          </Typography>
          <Divider sx={{ marginY: 2 }} />

          <Grid container spacing={4}>
            <Grid>
              <Typography variant="subtitle1">
                <strong>Origin:</strong> {breed.origin}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Weight:</strong> {breed.weight.imperial} lbs (
                {breed.weight.metric} kg)
              </Typography>
              <Typography variant="subtitle1">
                <strong>Life Span:</strong> {breed.life_span} years
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Adaptability:</strong>
                </Typography>
                <Rating
                  name="Adaptability"
                  value={breed.adaptability}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Affection Level:</strong>
                </Typography>
                <Rating
                  name="Affection Level"
                  value={breed.affection_level}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Child Friendly:</strong>
                </Typography>
                <Rating
                  name="Child Friendly"
                  value={breed.child_friendly}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Dog Friendly:</strong>
                </Typography>
                <Rating
                  name="Dog Friendly"
                  value={breed.dog_friendly}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Energy Level:</strong>
                </Typography>
                <Rating
                  name="Energy Level"
                  value={breed.energy_level}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Grooming:</strong>
                </Typography>
                <Rating
                  name="Grooming"
                  value={breed.grooming}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="subtitle1">
                  <strong>Intelligence:</strong>
                </Typography>
                <Rating
                  name="Intelligence"
                  value={breed.intelligence}
                  readOnly
                  sx={{ marginLeft: 1 }}
                />
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ marginY: 2 }} />
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              <strong>Temperament:</strong>
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {breed.temperament.split(", ").map((temp, index) => (
                <Chip label={temp} key={index} color="primary" />
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Learn more about {breed.name}:
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            href={breed.wikipedia_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia
          </Button>
          <Button
            variant="outlined"
            href={breed.cfa_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            CFA Website
          </Button>
          <Button
            variant="outlined"
            href={breed.vetstreet_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vetstreet
          </Button>
          <Button
            variant="outlined"
            href={breed.vcahospitals_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            VCA Hospitals
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BreedDetail;
