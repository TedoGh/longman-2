import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import AddCard from "./pages/AddCard";
import AllCards from "./pages/AllCards";
import Train from "./pages/Train";
import Progress from "./pages/Progress";
import GetStarted from "./pages/GetStarted";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="longman" index element={<Homepage />} />
        <Route path="longman/about" element={<About />} />
        <Route path="longman/addcard" element={<AddCard />} />
        <Route path="longman/cards" element={<AllCards />} />
        <Route path="longman/train" element={<Train />} />
        <Route path="longman/progress" element={<Progress />} />
        <Route path="longman/start" element={<GetStarted />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
