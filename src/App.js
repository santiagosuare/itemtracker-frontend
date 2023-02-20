import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
