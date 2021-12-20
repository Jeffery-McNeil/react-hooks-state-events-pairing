import React from "react";
import Likes from "./Likes";

function Video ({ video }) {

return (
<div>
<iframe
    width="919"
    height="525"
    src={video.embedUrl}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
/>
<h1>{video.title}</h1>
<p>{video.views} Views | Uploaded {video.createdAt}</p>
<Likes upvotes={video.upvotes} downvotes={video.downvotes}/>
</div>
)}

export default Video