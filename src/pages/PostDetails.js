import { useContext, useEffect, useState } from "react";
import { postsAndCommentsContext } from "../context/postsAndCommentsContext";
import { useParams } from "react-router-dom";
import "../components/PostDetailsPage/PostDetailsPage.css";

function PostDetails() {
  const {postId} = useParams();
  const {comments} = useContext(postsAndCommentsContext);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(data => setPost(data))
  }, [postId])

  return (
    <div className="post-details">
        <div className="container">
            <div className="post">
               <h1>{post.title}</h1>
               <p>{post.body}</p>
               <ul className="comments">
                <h6>Comments</h6>
                {comments.map((comment) => {
                    return <>
                    <li key={post.id}>{comment.body}</li>
                    <hr/>
                    </>
                })}
               </ul>
            </div>
        </div>
    </div>
  )
}

export default PostDetails