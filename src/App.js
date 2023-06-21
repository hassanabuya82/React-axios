import Title from "./components/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstRequest from "./examples/1-first-request";
import Headers from "./examples/2-headers";
import PostRequest from "./examples/3-post-request";
import GlobalInstance from "./examples/4-global-instance";
import CustomInstance from "./examples/5-custom-instance";
import "./axios/global";
import Interceptors from "./examples/6-interceptors";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Title />}></Route>
          <Route path="abuya/1" element={<FirstRequest />}></Route>
          <Route path="abuya/2" element={<Headers />}></Route>
          <Route path="abuya/3" element={<PostRequest />}></Route>
          <Route path="abuya/4" element={<GlobalInstance />}></Route>
          <Route path="abuya/5" element={<CustomInstance />}></Route>
          <Route path="abuya/6" element={<Interceptors />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
