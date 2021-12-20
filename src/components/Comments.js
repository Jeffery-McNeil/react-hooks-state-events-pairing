import React from "react";
import CommentLikes from "./CommentLikes";

function Comments ({ onDeleteComment, comments }) {
    return(
        <div>
            <h2>2 Comments</h2>
            {comments.map((comment) => {
                return (
                <div key={comment.id}>
                    <h3>{comment.user}</h3>
                    <p>{comment.comment}</p>
                    <CommentLikes />
                    <div>
                        <button onClick={()=> onDeleteComment(comment.id)}>Remove Comment</button>
                    </div>
                </div>
                )
            })}
        </div>
    
)}

export default Comments