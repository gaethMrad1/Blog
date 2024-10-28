import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import PostDetails from "./pages/PostDetails";
import Home from "./pages/Home";
import { postsAndCommentsContext } from "./context/postsAndCommentsContext";

function App() {
  const [comments, setComments] = useState([]);

  const values = {comments}

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => setComments(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <postsAndCommentsContext.Provider value={values}>
        <Routes>
          <Route path="/Blog" element={<Home />}/>
          <Route path="/post/:postId" element={<PostDetails />}/>
        </Routes>
      </postsAndCommentsContext.Provider>
    </div>
  );
}

export default App;
