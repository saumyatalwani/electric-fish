import { HashRouter as Router, Route, Routes  } from "react-router-dom";
//import Homepage from './pages/home'
import About from './pages/about'
import SiteHeader from "./components/navbar";
import Homepage from "./pages/home";

function App(){
    return(
        <Router>
        <SiteHeader></SiteHeader>
            <Routes>
                <Route path="/about" element={<About/>} Component={About}/>
                <Route exact path="/" element={<Homepage/>} Component={Homepage}/>
            </Routes>
        </Router>
    )
    };
export default App;