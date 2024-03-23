import react from "react";
import Routing from "./Routing";
// import MainPage from './Component/MainPage'
import Female from "./Component/Female"
import Male from "./Component/Men"
import MainPage from "./Component/MainPage";
import Footer from "./Footer";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav className="flex justify-between  bg-red-400 w-full fixed top-0">
      <Link to="/">Roster</Link>
      <div className="">
      <Link to="/Contact">Contact</Link>
      <Link to="/Mywork">My-work</Link>
      </div>
      </nav>
      <Routes>
        <Route index  element={<MainPage/>}/>
        <Route path="/Male" element={<Male/>}/>
        <Route path="/Female" element={<Female/>}/>
       
      </Routes>
      </BrowserRouter>
      
      {/* <Outlet /> */}
      {/* <MainPage /> */}
      <Footer />
    </div>
  );
};

export default App;
