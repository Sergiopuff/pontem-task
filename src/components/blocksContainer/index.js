import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Block from "./block";
import { ReactComponent as OneBlockImage } from "./icons/1.svg";
import { ReactComponent as TwoBlockImage } from "./icons/2.svg";
import { ReactComponent as ThreeBlockImage } from "./icons/3.svg";
import { ReactComponent as FourBlockImage } from "./icons/4.svg";
import BlockSkeleton from "./Skeleton";

function BlocksContainer() {
  const loading = useSelector((state) => state.blocks.isLoading);
  const collection = useSelector((state) => state.blocks.shownCollection);

  const imageMapper = {
    0: <OneBlockImage />,
    1: <OneBlockImage />,
    2: <TwoBlockImage />,
    3: <ThreeBlockImage />,
  };

  return (
    <Stack alignItems="center" spacing={2} sx={{ mt: 4 }}>
      {loading && <BlockSkeleton />}
      {!loading &&
        collection.map((block) => (
          <Block
            key={block.id}
            block={block}
            icon={imageMapper[block.blocksCount] || <FourBlockImage />}
          />
        ))}
    </Stack>
  );
}

export default BlocksContainer;
