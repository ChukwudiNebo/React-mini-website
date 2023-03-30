import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './Components/pages/sign up/SignUp'
import "./App.css";
import BlogPost from "./Components/pages/blog post/BlogPost";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<SignUp />}></Route>
          <Route path="/blog" exact element={<BlogPost />}></Route>
          {/* 
          <Route path="/recipe" exact element={<Recipe />}></Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
