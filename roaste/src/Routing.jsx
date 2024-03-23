import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MainPage from "./Component/MainPage";
import Contact from "./Component/Contact";
import Mywork from "./Component/Mywork";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <nav className="flex justify-between bg-blue-400 font-serif font-bold text-xl">
          <Link
            className="p-2 m-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-800 "
            to="/"
          >
          Roster 
          </Link>
          <div className="m-8">
            <Link
              className="p-2 m-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-800 "
              to="/Contact"
            >
              Contact
            </Link>
            <Link
              className="p-2 m-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-800 "
              to="/MYWork"
            >
              My work
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Female" element={<female />} />
          <Route path="/MyWork" element={<Mywork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
