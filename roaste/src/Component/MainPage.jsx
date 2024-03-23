import { Card } from "flowbite-react";
import React from "react";
import { Outlet, NavLink,Routes,Route } from "react-router-dom";
import Female from "./Female";
import Male from './Men'

const main = () => {
  return (
    <div>
      <Card className="flex flex-row w-[90%] h-[50%] mt-10">
        <div className="text-center">
          <h1 className="ml-[10vh]">Which አጎዛ gender are you?</h1>
        </div>
        <div className="w-[50%] h-[50%] flex gap-6">
          <NavLink to="Male">
            <button className="w-[10vh] h-[5vh]  text-2xl hover:bg-yellow-500">
              Male
            </button>
          </NavLink>

          <NavLink to="Female">
            <button className="w-[10vh] h-[5vh] text-2xl ">Female</button>
          </NavLink>
          <Routes>
            {/* <Outlet /> */}
          <Route path="/Female" element={<Female />} />
          <Route path="/Male" element={<Male />} />
        </Routes>
        </div>
      </Card>
   
    </div>
  );
};

export default main;
