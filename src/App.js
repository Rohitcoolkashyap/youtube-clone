import React from "react";
import "./App.scss";
import Header from "./components/layouts/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
