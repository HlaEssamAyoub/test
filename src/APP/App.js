
import './App.css';
import Header from '../components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Delete from "../pages/Delete";
import MoviesDetails from "../pages/MoviesDetails";
import AddMovies from "../pages/AddMovies";
import NotFound from "../pages/NotFound";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="movies" element={<Movies></Movies>}></Route>
            <Route path="delete/:Id" element={<Delete></Delete>}></Route>
            <Route path="moviesdetails/:Id" element={<MoviesDetails></MoviesDetails>}></Route>
            <Route path="movies/add" element={<AddMovies></AddMovies>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>



          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
