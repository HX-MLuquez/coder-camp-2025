import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import InsercionLaboral from "./views/InsercionLaboral";
import DestacarEnEntrevistas from "./views/DestacarEnEntrevistas";
import ModeloCv from "./views/ModeloCv";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } w-full`}
      >
        <div className="p-6 md:p-8">
          <Routes>
            <Route path="/" element={<Home toggleSidebar={toggleSidebar} />} />
            <Route path="/insercion-laboral" element={<InsercionLaboral toggleSidebar={toggleSidebar} />} />
            <Route
              path="/destacar-en-entrevistas"
              element={<DestacarEnEntrevistas toggleSidebar={toggleSidebar} />}
            />
            <Route path="/modelo-cv" element={<ModeloCv toggleSidebar={toggleSidebar} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
