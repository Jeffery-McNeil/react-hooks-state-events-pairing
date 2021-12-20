import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video"
import Comments from "./Comments"

function App() {
  const [hideComments, setHideComments] = useState(true)
  const [commentList, setCommentList] = useState(video.comments)

  function handleDeleteComment (deletedCommentId) {
    setCommentList(commentList.filter(comment => comment.id !== deletedCommentId))
  }

  function handleHideComments() {
    setHideComments(!hideComments)
  }

  return (
    <div className="App">
      <Video video={video}/>
      <button onClick={handleHideComments}>
        {hideComments ? "Hide Comments" : "Show Comments"}
      </button>
      {hideComments ? <Comments onDeleteComment={handleDeleteComment} comments={commentList} /> : null}
    </div>
  );
}

export default App;
