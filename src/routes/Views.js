import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

export default function Views() {
  return (
    <Routes>
      <Route path="/dashboard" element={<HomePage />} />
    </Routes>
  );
}
