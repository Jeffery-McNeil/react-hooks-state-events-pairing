import React, { useState } from "react"

function CommentLikes () {
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)

    function handleUpvotes () {
        setUpvotes(upvotes + 1)
    }

    function handleDownvotes () {
        setDownvotes(downvotes + 1)
    }

    return (
        <>
        <button onClick={handleUpvotes}>{upvotes} 👍</button>
        <button onClick={handleDownvotes}>{downvotes} 👎</button>
        </>
    )

}

export default CommentLikes