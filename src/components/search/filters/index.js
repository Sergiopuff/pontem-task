import Stack from "@mui/material/Stack";
import { Chip } from "@mui/material";
import { renderData } from "../../../redux/slices/blocks";
import { useDispatch, useSelector } from "react-redux";

const selectedStr = "selected";

function Filters() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.blocks.params.filter);
  const collections = useSelector((state) => state.blocks.collections);

  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 2 }}>
      {Object.keys(collections).map((filter) => (
        <Chip
          key={filter}
          onClick={() => {
            activeFilter !== filter && dispatch(renderData({ filter }));
          }}
          color={activeFilter === filter ? "success" : "secondary"}
          disabled={
            filter === selectedStr && collections[selectedStr].length < 1
          }
          variant="outlined"
          label={filter}
        />
      ))}
    </Stack>
  );
}

export default Filters;
