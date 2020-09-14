import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../Comment/Comment';

const PostDitails = (props) => {
    const [postInfo, setPostInfo] = useState({});
    let {idNo} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idNo}`)
        .then(res => res.json())
        .then(data => setPostInfo(data))
    },[]);
    const bold = {
        fontWeight: 'bold'
    };
    
    return (
        <div>
            <h6>Id: {idNo}</h6>
            <h4 style={{textAlign:'center'}}>TITLE: {postInfo.title}</h4>
            <p><span style={bold}> Description: </span> {postInfo.body}</p>
            <Comment></Comment>
            
        </div>
    );
};

export default PostDitails;