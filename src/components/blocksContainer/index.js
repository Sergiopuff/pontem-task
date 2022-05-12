import { useSelector } from "react-redux";
import Block from "./block";
import BlockSkeleton from "./Skeleton";
import { FixedSizeList as List } from "react-window";
import { outerElementType } from "./outterElemet";

function BlocksContainer() {
  const loading = useSelector((state) => state.blocks.isLoading);
  const collection = useSelector((state) => state.blocks.shownCollection);

  const Row = ({ index, style }) => (
    <div style={{ ...style, top: `${parseFloat(style.top) + 16}px` }}>
      <Block block={collection[index]} />
    </div>
  );

  return (
    <>
      {loading && <BlockSkeleton />}
      {!loading && (
        <List
          width={window.innerWidth}
          outerElementType={outerElementType}
          height={window.innerHeight}
          itemCount={collection.length}
          itemSize={182}
        >
          {Row}
        </List>
      )}
    </>
  );
}

export default BlocksContainer;
