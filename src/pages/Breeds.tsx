import { useEffect, useState } from "react";
import Masonry from "@mui/lab/Masonry";
import "../App.css";
import BreedCard from "../components/BreedCard";
import { Breed } from "../models/breed";
import getBreeds from "../services/getBreeds";
import { Box, CircularProgress, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";

function Breeds() {
  const [breeds, setBreeds] = useState<Breed[] | null>(null);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchBreeds = async () => {
    setLoading(true);
    try {
      const res = await getBreeds(limit, page);
      if (res && res.data) {
        setBreeds(res.data);
      } else {
        navigate("/error", {
          state: { message: "Error fetching breeds." },
        });
      }
    } catch (error) {
      console.error("Error fetching breeds:", error);
      navigate("/error", {
        state: { message: "Error fetching breeds." },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBreeds();

    localStorage.setItem("page", page.toString());
    localStorage.setItem("limit", limit.toString());
  }, [page, limit]);

  return (
    <>
      <NavBar setBreeds={setBreeds} />
      <Box sx={{ flexGrow: 1, padding: "0 0 1rem 1rem" }}>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <CircularProgress />
          </Box>
        ) : breeds && breeds.length > 0 ? (
          <>
            <PaginationBar
              page={page}
              setPage={setPage}
              limit={limit}
              setLimit={setLimit}
            />

            <Masonry columns={4} spacing={2}>
              {breeds.map((breed) => (
                <BreedCard
                  key={breed.id}
                  id={breed.id}
                  imageUrl={breed.image?.url}
                  name={breed.name}
                  description={breed.description}
                />
              ))}
            </Masonry>
          </>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Typography variant="h5">No such breed found.</Typography>
          </Box>
        )}
      </Box>
      <PaginationBar
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
      />
    </>
  );
}

export default Breeds;
