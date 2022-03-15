import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './index.css';


import App from './App.js';
import Ingredients from './routes/Ingredients.js';
import Wizards from './routes/Wizards.js';
import Elixirs from './routes/Elixirs';
import Houses from './routes/Houses';
import Characters from './routes/Characters';

const root = document.getElementById("root"); // root element is in the index.html

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/workspace/react-to-react/src/routes/Elixirs.js" element={<Elixirs />} />
        <Route path="/workspace/react-to-react/src/routes/Houses.js" element={<Houses />} />
        <Route path="/workspace/react-to-react/src/routes/Wizards.js" element={<Wizards />} />
        <Route path="/workspace/react-to-react/src/routes/Ingredients.js" element={<Ingredients />} />
        <Route path="/workspace/react-to-react/src/routes/Characters.js" element={<Characters />} />
      </Route>
    </Routes>
  </BrowserRouter>, root
);

