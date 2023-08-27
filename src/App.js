import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
            path="/search/:searchTerm"
          ></Route>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
