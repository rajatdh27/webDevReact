import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/content" exact element={<Content />} />
          <Route path="/logout" exact element={<Logout />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
