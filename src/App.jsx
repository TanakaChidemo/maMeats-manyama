import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Login from "./routes/login/login.component";
import SearchBox from "./components/search-box/searchbox.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<SearchBox />} />
      </Route>
    </Routes>
  );
};

export default App;
