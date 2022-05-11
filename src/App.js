import React from "react";
import Main from "./components/main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { fetchBlocks } from "./redux/slices/blocks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

store.dispatch(fetchBlocks());

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<Main />}>
              <Route path="/search/:query" element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
