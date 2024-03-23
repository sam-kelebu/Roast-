import react from "react";
import Routing from "./Routing";
// import MainPage from './Component/MainPage'
// import MainPage from "./Component/MainPage";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routing />
      <Outlet />
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
};

export default App;
