import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {Content} from "./Components/Content/Content";


function App() {
  return (
    <div className="frappe ctp-frappe bg-gray-700">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
