import React from "react";
import blogData from "../data/blog";
import HeaderComponent from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <HeaderComponent name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />
      <ArticleList posts={blogData.posts} />


    </div>
  );
}

export default App;
