import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

// ReactDOM.render(<App />, container);
root.render(<App tab="home" />);