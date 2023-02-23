import { HashRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import Characters from "./components/Characters";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path={`/characters/:id`}  element={<CharacterDetail/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
