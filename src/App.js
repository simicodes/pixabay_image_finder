import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
