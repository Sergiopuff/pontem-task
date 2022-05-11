import { useMemo } from "react";
import Highlighter from "react-highlight-words";
import StyledBlock from "../../styled/styledBlock";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { GradientText } from "../../styled/gradientText";
import { useDispatch, useSelector } from "react-redux";
import { removeSelected, setSelected } from "../../../redux/slices/blocks";

function Block({ block, icon }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.blocks.collections.selected);
  const searchParam = useSelector((state) => state.blocks.params.search);

  const isSelected = useMemo(
    () => selected.findIndex((item) => item.id === block.id),
    [block.id, selected]
  );

  return (
    <StyledBlock>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Stack direction="row" spacing={2}>
          <Stack>
            {icon}
            <GradientText variant="overline" align="center" sx={{ mt: 1.5 }}>
              {`${block.blocksCount} ${
                block.blocksCount === 1 ? "block" : "blocks"
              }`}
            </GradientText>
          </Stack>
          <Stack spacing={1} sx={{ pt: 1, pr: 1 }}>
            <Typography variant="body1" color="text.white">
              <Highlighter
                searchWords={[searchParam]}
                autoEscape={true}
                textToHighlight={block.title}
              />
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.6 }}
              color="text.secondary"
            >
              <Highlighter
                searchWords={[searchParam]}
                autoEscape={true}
                textToHighlight={block.description}
              />
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={1}>
          <Button variant="outlined">Details</Button>
          {isSelected >= 0 ? (
            <Button
              variant="contained"
              onClick={() => {
                dispatch(removeSelected({ id: block.id }));
              }}
            >
              Skip Selection
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(setSelected({ block }));
              }}
            >
              Mark as Suitable
            </Button>
          )}
        </Stack>
      </Stack>
    </StyledBlock>
  );
}

export default Block;
