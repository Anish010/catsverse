import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const location = useLocation();
  const message = location.state?.message || "Oops! Something went wrong.";

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
        backgroundColor: "#f8f8f8",
      }}
    >
      <ErrorOutlinedIcon sx={{ fontSize: 100, color: "error.main" }} />
      <Typography variant="h3" gutterBottom sx={{ marginTop: 3 }}>
        {message}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        Try Again Later !
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 4 }}
        onClick={handleGoBack}
      >
        Go Back Home
      </Button>
    </Box>
  );
}
