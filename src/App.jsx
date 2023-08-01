import Navbar from "./components/Navbar";
import PageHome from "./pages/Home";
import PageWeather from "./pages/Weather";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
        <>
            <Navbar />

            <Router>
                <Routes>
                    <Route path="/" element={<PageHome />}></Route>
                    <Route path="/weather" element={<PageWeather />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
