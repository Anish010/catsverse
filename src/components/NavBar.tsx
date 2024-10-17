import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import searchBreeds from "../services/searchBreed";
import { useNavigate } from "react-router-dom";
import getBreeds from "../services/getBreeds";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

interface NavBarProps {
  setBreeds: Function;
}

export default function NavBar({ setBreeds }: NavBarProps) {
  const navigate = useNavigate();
  const limit = localStorage.getItem("limit");
  const searchBreed = async (event: any) => {
    const searchTerm = event.target.value.toLowerCase();

    try {
      if (searchTerm.length === 0) {
        const res = await getBreeds(Number(limit));
        if (res && res.data) {
          setBreeds(res.data);
        }
        return;
      }

      const response = await searchBreeds(searchTerm);
      const filteredBreeds = response?.data;

      if (filteredBreeds && filteredBreeds.length === 0) {
        setBreeds([]);
        return;
      }
      setBreeds(filteredBreeds);
    } catch (error) {
      console.error("Error searching for breeds:", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CATSVERSE
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => searchBreed(event)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
