import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface BreedCardProps {
  id: string;
  imageUrl?: string;
  name: string;
  description: string;
}

export default function BreedCard({
  id,
  imageUrl,
  name,
  description,
}: BreedCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/cats-world/breeds/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        height: "auto",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={
          imageUrl
            ? imageUrl
            : "https://www.vhv.rs/dpng/d/154-1549888_cat-shadow-png-transparent-png.png"
        }
        title={name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={handleCardClick}
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
