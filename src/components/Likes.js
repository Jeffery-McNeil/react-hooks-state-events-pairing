import React, { useImperativeHandle, useState } from "react";

function Likes ({ upvotes, downvotes }) {
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleLikes() {
        setLikes(likes + 1);
    }

    function handleDislikes() {
        setDislikes(dislikes + 1);
    }

    return (
    <>
    <button onClick={handleLikes}>{likes} 👍</button>
    <button onClick={handleDislikes}>{dislikes} 👎</button>
    </>
    )}

export default Likes