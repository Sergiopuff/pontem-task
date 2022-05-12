import { Skeleton, Stack, useMediaQuery } from "@mui/material";

function BlockSkeleton() {
  const isSmDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Stack alignItems="center" spacing={2} mt={4}>
      {[...Array(6).keys()].map((key) => (
        <Skeleton
          key={key}
          variant="rectangular"
          sx={{ borderRadius: 2, bgcolor: "background.block" }}
          width="100%"
          height={isSmDown ? 244 : 166}
        />
      ))}
    </Stack>
  );
}

export default BlockSkeleton;
