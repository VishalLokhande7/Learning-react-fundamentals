import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {

    let [comments, setComments] = useState([{
        username: "@vl",
        remarks: "great job!",
        rating: 5,
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => {
            return [...currComments, comment];
        });
    };

    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(rating = {comment.rating})</span>
                    <p>- {comment.username}</p>
                </div> 
                ))}

                <hr />
                <CommentsForm addNewComment={addNewComment} />
            </div>
        </>

    );
}