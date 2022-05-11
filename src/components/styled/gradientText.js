import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const GradientText = styled(Typography)(({ theme }) => ({
  background: theme.palette.text.gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export { GradientText };
