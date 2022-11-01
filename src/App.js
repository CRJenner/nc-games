import "./App.css";
import Header from "./components/Header";
// import Welcome from "./components/Welcome";
// import Users from "./components/Users";
import Reviews from "./components/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
