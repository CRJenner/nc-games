import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Users from "./components/Users";
import { fetchUsers } from "./api";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Users />
    </div>
  );
}

export default App;
