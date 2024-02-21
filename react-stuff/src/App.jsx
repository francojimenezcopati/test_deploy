import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./Nav";
import {TestsPage} from './TestsPage'

function App() {
    return (
        <BrowserRouter>
            <div className="container mx-auto">
                <Nav />
                <Routes>
                    <Route path="/" element={<Navigate to="/tests" />} />
                    <Route path="/tests" element={<TestsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
