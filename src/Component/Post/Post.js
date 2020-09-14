import React, { useEffect, useState } from 'react';
import Postlist from '../Postlist/Postlist';


const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))        
    }, []);
    
    return (
        <div>
            
            <h4>This is for post: {post.length}</h4>
            {
                post.map(SinglePost => <Postlist ditails={SinglePost} ></Postlist>)
            }
            
        </div>
    );
};

export default Post;