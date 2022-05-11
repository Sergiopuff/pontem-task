import Box from "@mui/material/Box";

export default function StyledBlock({ children, ...props }) {
  return (
    <Box
      {...props}
      sx={{
        bgcolor: "background.blockOpacity",
        width: 1,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.16), 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)",
      }}
    >
      <Box
        sx={{
          background: (theme) => theme.palette.background.blockGradient,
          p: 2,
          pb: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
