import { InputAdornment, TextField } from "@mui/material";
import { renderData } from "../../../redux/slices/blocks";
import { ReactComponent as SearchIcon } from "../icons/Search.svg";
import { useDispatch } from "react-redux";

function SearchInput() {
  const dispatch = useDispatch();

  return (
    <TextField
      fullWidth
      color="primary"
      onChange={(event) => dispatch(renderData({ search: event.target.value }))}
      variant="outlined"
      placeholder="Search by operation or DeFi company name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInput;
