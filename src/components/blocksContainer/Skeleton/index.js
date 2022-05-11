import { Skeleton } from "@mui/material";

function BlockSkeleton() {
  return (
    <>
      {[...Array(10).keys()].map((key) => (
        <Skeleton
          key={key}
          variant="rectangular"
          sx={{ borderRadius: 2, bgcolor: "background.block" }}
          width={640}
          height={166}
        />
      ))}
    </>
  );
}

export default BlockSkeleton;
