import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Commentditails from '../Commnetditails/Commentditails';


const Comment = () => {
    const [comment, setComment] = useState([]);
    let {idNo} = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idNo}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h3 style={{textAlign:'center'}}>COMMENT</h3>
            {
                comment.map(singleComment => <Commentditails comment={singleComment}></Commentditails>)
            }
          
        </div>
    );
};

export default Comment;