import React from 'react';
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./styles/Global";

import Routes from "./routes";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
