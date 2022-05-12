import Stack from "@mui/material/Stack";
import { Chip } from "@mui/material";
import { renderData } from "../../../redux/slices/blocks";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_FILTER } from "../../../utils/constants";

function Filters() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.blocks.params.filter);
  const selected = useSelector((state) => state.blocks.selected);
  const filters = useSelector((state) => state.blocks.filters);

  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 2 }}>
      {filters.map((filter) => (
        <Chip
          key={filter}
          onClick={() => {
            activeFilter !== filter && dispatch(renderData({ filter }));
          }}
          color={activeFilter === filter ? "success" : "secondary"}
          disabled={filter === SELECTED_FILTER && selected.length < 1}
          variant="outlined"
          label={filter}
        />
      ))}
    </Stack>
  );
}

export default Filters;
