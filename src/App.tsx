import React from "react";
// @ts-ignore
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer/Footer";
import AuthPage from "./components/AuthPage/AuthPage";
import SearchPage from "./components/SearchPage/SearchPage";
import ResultPage from "./components/ResultPage/ResultPage";

function App() {
  return (
    <div className={classes.root}>
      <BrowserRouter>
        <div className={classes.content}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route
              path="/search"
              element={
                localStorage.getItem("accessToken") ? (
                  <SearchPage />
                ) : (
                  <AuthPage />
                )
              }
            />
            <Route
              path="/result"
              element={
                localStorage.getItem("accessToken") ? (
                  <ResultPage />
                ) : (
                  <AuthPage />
                )
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
