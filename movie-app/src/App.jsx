import { Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route element={<Homepage />} path="/"></Route>
      <Route element={<MovieDetails />} path="/movie/:id"></Route>
    </Routes>
  );
}

export default App;
