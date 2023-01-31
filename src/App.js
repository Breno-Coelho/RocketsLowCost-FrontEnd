import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.tsx";
import CheckPage from "./pages/check/CheckPage.tsx";
import RegisterPage from "./pages/register/RegisterPage.tsx";
import LaunchPage from "./pages/launch/LaunchPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import HistoryPage from "./pages/history/HistoryPage.tsx";

function App() {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/check' element={<CheckPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/launch' element={<LaunchPage />} />
        <Route path='/history' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
