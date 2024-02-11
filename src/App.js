import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Content} from "./Components/Content/Content";

function App() {
  return (
    <div className="App frappe">
      <header className="App-header">
        <Header/>
      </header>
        <Content/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
