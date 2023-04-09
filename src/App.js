import { HashRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './pages/home'

function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/electricfish" element={<Home/>}/>
            </Routes>
        </Router>
    )
    };
export default App;