import { styled } from "@mui/material/styles";

const Layout = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  background: theme.palette.background.main,
  paddingBottom: 24,
}));

export { Layout };
