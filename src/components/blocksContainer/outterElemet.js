import { forwardRef, useRef } from "react";
import { useScroll } from "@use-gesture/react";

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

export { outerElementType };
