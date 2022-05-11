import { useSelector } from "react-redux";
import Block from "./block";
import BlockSkeleton from "./Skeleton";

import { FixedSizeList as List } from "react-window";
import { forwardRef, useRef } from "react";
import { useScroll } from "@use-gesture/react";

function BlocksContainer() {
  const loading = useSelector((state) => state.blocks.isLoading);
  const collection = useSelector((state) => state.blocks.shownCollection);

  const Row = ({ index, style, ...props }) => {
    return (
      <div
        style={{
          ...style,
          top: `${parseFloat(style.top) + 16}px`,
        }}
      >
        <Block block={collection[index]} />
      </div>
    );
  };

  const outerElementType = forwardRef(({ style, onScroll, children }, ref) => {
    const containerRef = useRef(null);
    useScroll(
      () => {
        if (!(onScroll instanceof Function)) {
          return;
        }
        const {
          clientWidth,
          clientHeight,
          scrollLeft,
          scrollTop,
          scrollHeight,
          scrollWidth,
        } = document.documentElement;
        onScroll({
          currentTarget: {
            clientHeight,
            clientWidth,
            scrollLeft,
            scrollTop:
              scrollTop -
              (containerRef.current
                ? containerRef.current.getBoundingClientRect().top + scrollTop
                : 0),
            scrollHeight,
            scrollWidth,
          },
        });
      },
      { target: window }
    );
    ref.current = document.documentElement;
    return (
      <div style={{ position: "relative" }} ref={containerRef}>
        {children}
      </div>
    );
  });

  return (
    <>
      {/*<Stack alignItems="center" spacing={2} sx={{ mt: 4 }}>*/}

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
      {/*</Stack>*/}
    </>
  );
}

export default BlocksContainer;
