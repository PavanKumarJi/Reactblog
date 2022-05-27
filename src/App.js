import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bollywood from "./Components/Bollywood";
import Fitness from "./Components/Fitness";
import Head from "./Components/Head";
import Api from "./Components/Api";
import Fapi from "./Components/Fapi";
import Food from "./Components/Food";
import Home from "./Components/Home";
import Tourism from "./Components/Tourism";
import Foodapi from "./Components/Foodapi";
import Tourapi from "./Components/Tourapi";
import Latestapi from "./Components/Latestapi";
import Topapi from "./Components/Topapi";
import Articalapi from "./Components/Articalapi";

function App() {
  return (
    <Topapi>
      <Articalapi>
        <Latestapi>
          <Tourapi>
            <Foodapi>
              <Fapi>
                <Api>
                  <>
                    <BrowserRouter>
                      <Head />
                      <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/torisum" element={<Tourism />} />
                        <Route path="/bollywood" element={<Bollywood />} />
                        <Route path="/fitness" element={<Fitness />} />
                        <Route path="/food" element={<Food />} />
                      </Routes>
                    </BrowserRouter>
                  </>
                </Api>
              </Fapi>
            </Foodapi>
          </Tourapi>
        </Latestapi>
      </Articalapi>
    </Topapi>
  );
}

export default App;
