import { Layout } from "../styled/layout";
import Container from "@mui/material/Container";
import Header from "../header";
import Search from "../search";
import BlocksContainer from "../blocksContainer";

function Main() {
  return (
    <Layout>
      <Container>
        <Header />
        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Search />
          <BlocksContainer />
        </Container>
      </Container>
    </Layout>
  );
}

export default Main;
