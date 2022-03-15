import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Harry Potter World</h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem",}}>
        <Link to="/">Home</Link> |{" "}
        <Link to="./workspace/react-to-react/src/routes/Houses.js">Houses</Link> |{" "}
        <Link to="./workspace/react-to-react/src/routes/Elixirs.js">Elixirs</Link> |{" "}
        <Link to="./workspace/react-to-react/src/routes/Ingredients.js">Ingredients</Link> |{" "}
        <Link to="./workspace/react-to-react/src/routes/Wizards.js">Wizards</Link>|{" "}
      </nav>
      <Outlet />
    </div>
  );
}

