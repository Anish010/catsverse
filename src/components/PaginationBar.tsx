import { Box, MenuItem, Select, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { blue } from "@mui/material/colors";

interface PaginationProps {
  page: number;
  setPage: (newPage: number) => void;
  limit: number;
  setLimit: (newLimit: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  page,
  setPage,
  limit,
  setLimit,
}) => {
  const handleNextPage = () => setPage(page + 1);
  const handlePreviousPage = () => setPage(page > 0 ? page - 1 : 0);

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: 2, padding: 2, borderRadius: 2 }}
    >
      <IconButton
        onClick={handlePreviousPage}
        disabled={page === 0}
        sx={{
          color: blue[500],
          "&:hover": { bgcolor: blue[100] },
          "&:disabled": { color: blue[200] },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <Typography
        sx={{ marginX: 2, fontSize: "1.2rem", fontWeight: "bold" }}
      >
        Page: {page + 1}
      </Typography>

      <IconButton
        onClick={handleNextPage}
        sx={{ color: blue[500], "&:hover": { bgcolor: blue[100] } }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Typography
        sx={{ marginLeft: 4, fontSize: "1.1rem", fontWeight: "bold" }}
      >
        Items per page:
      </Typography>
      <Select
        value={limit}
        onChange={handleLimitChange}
        sx={{
          marginLeft: 2,
          height: "2.5rem",
          fontWeight: "bold",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: blue[700],
          },
        }}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
    </Box>
  );
};

export default PaginationComponent;
