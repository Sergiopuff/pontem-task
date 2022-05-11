import { Skeleton, Stack } from "@mui/material";

function BlockSkeleton() {
  return (
    <Stack alignItems="center" spacing={2} mt={4}>
      {[...Array(6).keys()].map((key) => (
        <Skeleton
          key={key}
          variant="rectangular"
          sx={{ borderRadius: 2, bgcolor: "background.block" }}
          width={640}
          height={166}
        />
      ))}
    </Stack>
  );
}

export default BlockSkeleton;
