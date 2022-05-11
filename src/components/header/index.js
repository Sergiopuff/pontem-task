import { AppBar, Button, Link, Stack } from "@mui/material";
import { ReactComponent as Logo } from "./icons/blocks.svg";

function Header() {
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Stack
        sx={{ pt: 3, pb: 2 }}
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link sx={{ cursor: "pointer" }} href="/">
          <Logo />
        </Link>

        <Button color="secondary" variant="text">
          PASTE YOUR FULLNAME
        </Button>
      </Stack>
    </AppBar>
  );
}

export default Header;
