import React from "react";
import { MantineProvider } from '@mantine/core';

import { Home } from "./components/pages/Home";

import "./App.scss";
import '@mantine/core/styles.css'

// const theme = createTheme({
//   /** Put your mantine theme override here */
// });

function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark'
      }}
    >

    <div className="App">
        <Home />
    </div>
    </MantineProvider>
  );
}

export default App;
