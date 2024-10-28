import { useEffect, useState } from "react";
import "../components/HomePage/HomePage.css";
import { Link } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
      }, [])

  return (
    <div className="home">
        <div className="container">
            <h1>{"{POSTS}"}</h1>
            <div className="cards">
            {posts.map((post) => {
                return <div key={post.id} className="card">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/${post.id}`}>details</Link>
                </div>
            })}
            </div>
        </div>
    </div>
  )
}

export default Home